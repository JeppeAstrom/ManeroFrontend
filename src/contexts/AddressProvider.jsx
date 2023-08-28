import React, { createContext, useEffect, useState } from 'react';
import { getAddressData, updateAddressData } from "../components/services/AddressService"

const AddressContext = createContext();

const AddressProvider = (props) => {
  const [addressData, setAddressData] = useState(null);

  const getAddress = async () => {
    const data = await getAddressData();
    setAddressData(data);
  };

  const updateAddress = async (newAddress) => {
    return await updateAddressData(newAddress);
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <AddressContext.Provider value={{ getAddress, addressData, updateAddress }}>
      {props.children}
    </AddressContext.Provider>
  );
};

export { AddressContext, AddressProvider };
