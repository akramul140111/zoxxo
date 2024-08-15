import axios from 'axios';
import { isBrowser } from '../utils';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  withCredentials: true, // for sending cookies
});

// Adding interceptor so that on every request, authorization header should be available
instance.interceptors.request.use((c) => {
  const updated = {
    ...c,
    headers: {
      ...c.headers,
      Authorization: isBrowser() ? `${localStorage.getItem('zoxxo-token')}` : '',
    },
  };
  return updated;
});

instance.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => Promise.reject(err.response?.data || { message: err.message })
);

export const getUploadLinks = (fs) => {
  return instance.post('/uploads', {
    files: fs.map((f) => ({ name: f.name, size: f.size })),
  });
};

export const verifyUploadCompletion = (uploadId, data) => {
  return instance.post(`/uploads/${uploadId}`, { emailData: data });
};

export const getUploadInfo = (uploadId) => {
  return instance.get('/uploads/' + uploadId);
};

export const getDownloadLinks = (uploadId) => {
  return instance.get(`/uploads/${uploadId}/download-links`);
};

export const getWorkspaceInfo = (workspaceId) => {
  return instance.get(`/workspaces/${workspaceId}`);
};

export const getDefaultWorkspace = (username) => {
  return instance.get(`/default-workspace/${username}`);
};

export const getCampaign = (display) => {
  return instance.get(`/campaigns/${display}`);
};

export const incrementClicks = (campaignId, token) => {
  return instance.put(`/campaigns/clicks/${campaignId}`, { token });
};

export const emailToUploader = (uploadId, content) => {
  return instance.post(`/uploads/${uploadId}/email`, { content });
};
