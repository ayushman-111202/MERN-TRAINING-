'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const UpdateUser = () => {

  const { id } = useParams();
  console.log(id);
  

  return (
    <div>
      update user page
    </div>
  )
}

export default UpdateUser;
