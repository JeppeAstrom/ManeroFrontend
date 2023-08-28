import React, { useEffect, useState, useContext } from 'react';
import InputBox from '../../misc/InputBox';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../../contexts/ProfileProvider';

const EditProfile = () => {
  const navigate = useNavigate();
  const { profileData, updateProfile } = useContext(ProfileContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (profileData) {
      setFirstName(profileData.firstName);
      setLastName(profileData.lastName);
      setEmail(profileData.email);
      setPhone(profileData.phoneNumber);
      setLocation(profileData.location);
      setImageUrl(profileData.imageUrl);
    }
  }, [profileData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUserData = {
      firstName,
      lastName,
      email,
      phoneNumber: phone,
      location,
      imageUrl,
    };

    updateProfile(updatedUserData)
      .then((result) => {
        if (result) {
          navigate('/account');
        } else {
          console.log('Profile update failed.');
        }
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-lg w-full bg-white rounded-lg shadow-lg p-8 mt-20'>
        <form method='put'>
          <InputBox
            classes='w-full'
            label='FIRST NAME'
            type='text'
            id='firstName'
            name='firstName'
            placeholder='Enter your first name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required={true}
          />
          <InputBox
            classes='w-full'
            label='LAST NAME'
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Enter your last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required={true}
          />
          <InputBox
            classes='w-full'
            label='EMAIL'
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <InputBox
            classes='w-full'
            label='PHONE NUMBER'
            type='text'
            id='phone'
            name='phone'
            placeholder='Enter your phone number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required={true}
          />
          <InputBox
            classes='w-full'
            label='LOCATION'
            type='text'
            id='location'
            name='location'
            placeholder='Enter your location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required={true}
          />
          {}
          <button
            className="bg-black hover:bg-blue-600 text-white w-full py-2 rounded-3xl mb-20 mt-6"
            onClick={handleSubmit}
          >
            SAVE CHANGES
          </button>
        </form>
      </div>
    </div>
  );
  
  
};

export default EditProfile;
