import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Registration from "./Components/REgistration";
import ContactUs from "./Components/ContactUs";
import App from "./App";
import NoPage from "./Components/NoPage"
import Dashboard from './Components/Dashboard';

export default function AppRoot() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Menu />}>
            <Route index element={<App />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="userRegistration" element={<App />} />
            <Route path="registration" element={<Registration />} />
            <Route path="*" element={<NoPage />} />
        </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
     <AppRoot />

);

