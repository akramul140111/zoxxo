import axios from 'axios';
import { isBrowser, objectToFormData } from '../utils';

const userApi = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/users`,
  withCredentials: true, // for sending cookies
});

userApi.interceptors.request.use((c) => {
  const updated = {
    ...c,
    headers: {
      ...c.headers,
      Authorization: isBrowser()
        ? `${localStorage.getItem('zoxxo-token')}`
        : '',
    },
  };
  return updated;
});

userApi.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => Promise.reject(err.response?.data || { message: err.message })
);

export const changeUsername = (username) => {
  return userApi.post('/username', { username });
};

export const changeAvatar = (avatar) => {
  const fd = new FormData();
  fd.append('avatar', avatar);
  return userApi.post(`/avatar`, fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const changeLanguage = (language) => {
  return userApi.post('/language', { language });
};

export const changeDefaultworkspace = (workspaceId) => {
  return userApi.post('/default-workspace', { defaultWorkspace: workspaceId });
};

export const changeUrl = (url) => {
  return userApi.post('/zoxxo-url', { zoxxoUrl: url });
};

export const changePassword = (data) => {
  return userApi.post('/password', data);
};

export const changeEmail = (data) => {
  return userApi.post('/email', data);
};

export const updateBillingDetails = (data) => {
  return userApi.post('/billing', data);
};

export const updatePaymentMethod = (data) => {
  return userApi.post('/payment-method', data);
};

export const upgradePlan = (data) => {
  return userApi.post('/subscription', data);
};

export const downgradePlan = () => {
  return userApi.put('/subscription');
};

export const verifyPaypalSubscription = (data) => {
  return userApi.post('/upgrade-plan/paypal-confirmation', data);
};

export const getInvoices = () => {
  return userApi.get('/invoices');
};

export const deleteUser = () => {
  return userApi.delete('/');
};

export const createWorkspace = (name) => {
  return userApi.post('/workspaces', { name });
};

export const getWorkspaces = () => {
  return userApi.get('/workspaces');
};

export const getWorkspace = (_id) => {
  return userApi.get(`/workspaces/${_id}`);
};

export const renameWorkspace = (_id, newName) => {
  return userApi.post(`/workspaces/${_id}/name`, { name: newName });
};

export const uploadWorkspaceCoverImage = (_id, coverImage) => {
  const fd = new FormData();
  fd.append('coverImage', coverImage);
  return userApi.post(`/workspaces/${_id}/cover-image`, fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getWorkspaceUploadLinks = (_id, data) => {
  const fd = new FormData();
  data.files.forEach((f) => {
    fd.append('files', f.name);
    fd.append('sizes', f.size.toString());
  });
  if (data.coverImage) fd.append('coverImage', data.coverImage);
  if (data.color) fd.append('color', data.color);
  return userApi.post(`/workspaces/${_id}/uploads`, fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getUpdateUploadLinks = (_id, uploadId, data) => {
  const fd = new FormData();
  data.files.forEach((f) => {
    fd.append('newFileNames', f.name);
    fd.append('sizes', f.size.toString());
  });
  data.deletedFiles?.forEach((f) => fd.append('deletedFiles', f));
  if (data.deletedFiles?.length === 1) {
    fd.append('deletedFiles', '....');
  }
  if (data.coverImage) fd.append('coverImage', data.coverImage);
  if (data.color) fd.append('color', data.color);
  return userApi.put(`/workspaces/${_id}/uploads/${uploadId}`, fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const validateUploadCompletion = (workspaceId, uploadId, files) => {
  return userApi.post(`/workspaces/${workspaceId}/uploads/${uploadId}`, {
    files,
  });
};

export const updateUploadName = (workspaceId, uploadId, name) => {
  return userApi.put(`/workspaces/${workspaceId}/uploads/${uploadId}/name`, {
    name,
  });
};

export const moveUpload = (data) => {
  return userApi.put(
    `/workspaces/${data.currentWorkspaceId}/uploads/${data.uploadId}/move/${data.targetWorkspaceId}`
  );
};

export const deleteUpload = (workspaceId, uploadId) => {
  return userApi.delete(`/workspaces/${workspaceId}/uploads/${uploadId}`);
};

export const deleteWorkspace = (workspaceId) => {
  return userApi.delete(`/workspaces/${workspaceId}`);
};

export const createCampaign = (data) => {
  let d = data;
  if (!d.creativeABTesting?.url || !d.creativeABTesting?.image?.name) {
    d.creativeABTesting = undefined;
  }
  const fd = objectToFormData(d);
  return userApi.post('/campaigns', fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getCampaigns = () => {
  return userApi.get('/campaigns');
};

export const getCampaign = (id) => {
  return userApi.get(`/campaigns/${id}`);
};

export const payCampaign = (id) => {
  return userApi.put(`/campaigns/${id}/payment`);
};

export const captureCampaignOrder = (campaignId, orderId) => {
  return userApi.put(`/campaigns/${campaignId}/capture/${orderId}`);
};
