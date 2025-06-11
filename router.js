import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Result from './Result';

const AppRoutes = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<Result />} />
        <Route path="/images" element={<Result />} />
        <Route path="/videos" element={<Result />} />
        <Route path="/news" element={<Result />} />
        <Route path="/shopping" element={<Result />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;