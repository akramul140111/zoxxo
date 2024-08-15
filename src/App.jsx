// ---------------- React Imports ------------------------
import React from 'react';

// ---------------- Third Party Imports  ------------------------
import { CssBaseline, ThemeProvider } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// ----------------  Internal Files Imports ------------------------

import Layout from './Layouts/Layout.jsx';
import routeLinks from './config/routeLinks.js';
import TestScreen from './screens/test/TestScreen.jsx';
import { ColorModeContext, useMode } from './theme.js';

// ----------------  Styles Imports ------------------------
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import BusinessScreen from './screens/BusinessScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import PricingScreen from './screens/PricingScreen.jsx';
import TornadoScreen from './screens/TornadoScreen.jsx';
import SignInScreen from './screens/SignInScreen.jsx';
import SignUpScreen from './screens/SignUpScreen.jsx';
import HelpCenterScreen from './screens/HelpCenterScreen.jsx';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen.jsx';
import TermsServiceScreen from './screens/TermsServiceScreen.jsx';
import PlatformScreen from './screens/PlatformScreen.jsx';
import BrandScreen from './screens/BrandScreen.jsx';
import AdvertisingScreen from './screens/AdvertisingScreen.jsx';


import DashboardLayout from './Layouts/DashboardLayout.jsx';
import AccountManage from './components/Dashboard/Content/AccountManage.jsx';
import DashboardManage from './components/Dashboard/Content/DashboardManage.jsx';
import PlanManage from './components/Dashboard/Content/PlanManage.jsx';
import PreferenceManage from './components/Dashboard/Content/PreferenceManage.jsx';



import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      networkMode: 'always', // always execute irrespect of network availability
    },
    mutations: {
      retry: 0,
      networkMode: 'always', // always execute irrespect of network availability
    },
  },
});

import MonitizationScreen from './screens/MonitizationScreen.jsx';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen.jsx';
import NotFound from './screens/NotFoundScreen.jsx';

import Workspace from './components/Dashboard/Workspace/Workspace.jsx';
import Advertisement from './components/Dashboard/Advertisement/Advertisement.jsx';
import CommunicationsManage from './components/Dashboard/Content/CommunicationsManage.jsx';
import Plan from './components/Dashboard/Plan/Plan.jsx';

import TestScreenUpload from './screens/test/TestScreenupload.jsx';
import TestCard from './screens/test/TestCard.jsx';
import TestCardLatest from './screens/test/TestCardLatest.jsx';
import UploadFileScreen from './screens/UploadFileScreen.jsx';
import DashboardScreen1 from './screens/DashboardScreen1.jsx';
import ReadArticleScreen from './screens/ReadArticleScreen.jsx';







const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path={routeLinks.home} element={<Layout />}>
      {/* -------------------- Regular Routes ------------------------ */}
      <Route index={true} path={routeLinks.home} element={<HomeScreen />} />
      <Route path={routeLinks.testScreen} element={<TestScreen />} />
      <Route path={routeLinks?.pricing} element={<PricingScreen />} />
      <Route path={routeLinks?.business} element={<BusinessScreen />} />
      <Route path={routeLinks?.tornado} element={<TornadoScreen />} />
      <Route path={routeLinks?.signUp} element={<SignUpScreen />} />      
      <Route path={routeLinks?.signIn} element={<SignInScreen />} />
      <Route path={routeLinks?.helpCenter} element={<HelpCenterScreen />} />
      <Route path={routeLinks?.privacyPolicy} element={<PrivacyPolicyScreen />} />
      <Route path={routeLinks?.termsService} element={<TermsServiceScreen />} />
      <Route path={routeLinks?.advertising} element={<AdvertisingScreen />} />
      <Route path={routeLinks?.brand} element={<BrandScreen />} />
      <Route path={routeLinks?.platform} element={<PlatformScreen />} />
      <Route path={routeLinks?.monetization} element={<MonitizationScreen />} />
      <Route path={routeLinks?.forgotPassword} element={<ForgotPasswordScreen />} />
      <Route path={routeLinks?.readArticle} element={<ReadArticleScreen />} />
      <Route path={routeLinks?.download} element={<UploadFileScreen />} />
      <Route path={routeLinks?.dashboard1} element={<DashboardScreen1 />} />
      <Route path="/testUpload" element={<TestScreenUpload/>} />
      <Route path="/testCardLatest" element={<TestCardLatest/>} />
      <Route path="/testCard" element={<TestCard/>} />

      {/* -------------------- Private Routes ------------------------ */}

      {/* -------------------- Admin Routes ------------------------ */}
    </Route>
     <Route path={routeLinks.dashboard} element={<DashboardLayout />}>
     <Route path={routeLinks.dashboard} element={<DashboardManage />} />
     <Route path={routeLinks.account} element={<AccountManage />} />
     <Route path={routeLinks.plan} element={<PlanManage />} />
     <Route path={routeLinks.upgrade} element={<Plan />} />
     <Route path={routeLinks.preference} element={<PreferenceManage />} />
     <Route path={routeLinks.communications} element={<CommunicationsManage />} />
     <Route path={routeLinks.workspace} element={<Workspace />} />
     <Route path={routeLinks.advertisement} element={<Advertisement />} />
     </Route>
           {/* -------------------- 404 Route ------------------------ */}
           <Route path="*" element={<NotFound />} />

     </>
  )
);

function App() {
  let [theme, colorMode] = useMode();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <HelmetProvider>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
          <QueryClientProvider client={client}>

            <CssBaseline />

            <DndProvider backend={HTML5Backend}>
        
            <RouterProvider router={router} />
            </DndProvider>
            </QueryClientProvider>
          </ThemeProvider>
          <ToastContainer />
        </ColorModeContext.Provider>

      </HelmetProvider>
    </>
  );
}

export default App;
