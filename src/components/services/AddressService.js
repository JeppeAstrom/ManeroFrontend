
const addressUrl = 'https://localhost:7164/v1/api/address';

const getAddressData = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const result = await fetch(addressUrl + "es", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error fetching address data:', error);
    return [];
  }
};

const updateAddressData = async (newAddress) => {
  try {
    const token = localStorage.getItem('accessToken');
    const result = await fetch(addressUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newAddress),
    });

    return result.status === 204;
  } catch (error) {
    console.error('Error updating address:', error);
    return false;
  }
};

export { getAddressData, updateAddressData };
