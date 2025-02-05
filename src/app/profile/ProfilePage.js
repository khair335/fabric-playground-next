"use client"
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import ProfileEdit from './ProfileEdit';
import Profile from './page';



const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };
  return (
    <div className='max-w-8xl mx-auto w-full px-[50px] py-12'>
      {isEditing ? (
        <ProfileEdit onCancel={handleCancelClick} />
      ) : (
       <Profile onEdit={handleEditClick} />
      )}
    </div>
  );
};

export default ProfilePage;