import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import LoginSignUp from './pages/LoginSignUp';
import { Toaster } from 'react-hot-toast';
import YoutubeHome from './pages/YoutubeHome';
import App from './App';
import DashBoard from './pages/DashBoard';
import ContentPage from './pages/ContentPage';
const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<LoginSignUp />} />
    <Route path='/home' element={<App />}>
      <Route path='' element={<YoutubeHome />} />
      <Route path='/home/dashboard' element={<DashBoard />}>
        <Route path='/home/dashboard' element={<ContentPage/>}/>
      </Route>
    </Route>
  </>
));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <CookiesProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CookiesProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
