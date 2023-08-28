import React, { createContext, useEffect, useState } from 'react';
import { getProfileData, updateProfileData } from "../components/services/ProfileService";

const ProfileContext = createContext();

const ProfileProvider = (props) => {
  const [profileData, setProfileData] = useState(null);

  const getProfile = async () => {
    const token = localStorage.getItem('accessToken');
    const data = await getProfileData(token);
    setProfileData(data);
  };

  const updateProfile = async (updatedUserData) => {
    const token = localStorage.getItem('accessToken');
    return await updateProfileData(token, updatedUserData);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ getProfile, profileData, updateProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
