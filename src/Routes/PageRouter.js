import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homescreen from '../pages/Homescreen';
import ServicesPage from '../pages/ServicesPages';
import PhotoGalleryPage from '../pages/PhotoGalleryPage';
import ContactUsPage from '../pages/ContactUsPage';
import ImpressumPage from '../pages/ImpressumPage';

function PageRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/photogallery" element={<PhotoGalleryPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
      </Routes>
    </Router>
  );
}

export default PageRouter;