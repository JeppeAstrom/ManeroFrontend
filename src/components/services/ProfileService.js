const userUrl = 'https://localhost:7164/v1/api/User/profile';

export const getProfileData = async (token) => {
  try {
    const result = await fetch(userUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error fetching profile data:', error);
    throw error;
  }
};

export const updateProfileData = async (token, updatedUserData) => {
  // Remove null values from the user object
  const user = Object.keys(updatedUserData).reduce((acc, key) => {
    if (updatedUserData[key] !== null) {
      acc[key] = updatedUserData[key];
    }
    return acc;
  }, {});

  try {
    const result = await fetch(userUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });

    return result.status === 204;
  } catch (error) {
    console.error('Error updating profile data:', error);
    throw error;
  }
};
