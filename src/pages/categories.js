import MainLayout from '@/layouts/mainLayout';
import React from 'react';

const category = () => {
  return (
    <div className='py-20'>
      <h1>category</h1>
    </div>
  );
};

export default category;

category.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};