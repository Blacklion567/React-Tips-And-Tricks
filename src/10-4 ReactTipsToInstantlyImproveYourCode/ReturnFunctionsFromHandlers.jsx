import { useState } from 'react';

export default function App() {
   const [user, setUser] = useState({
      name: '',
      surname: '',
      address: '',
   });

   // First handler
   const handleNameChange = (e) => {
      setUser((prev) => ({
         ...prev,
         name: e.target.value,
      }));
   };

   // Second handler!
   const handleSurnameChange = (e) => {
      setUser((prev) => ({
         ...prev,
         surname: e.target.value,
      }));
   };

   // Third handler!!!
   const handleAddressChange = (e) => {
      setUser((prev) => ({
         ...prev,
         address: e.target.value,
      }));
   };

   // What if we need one more input? Should we create another handler for it?

   return (
      <>
         <input value={user.name} onChange={handleNameChange} />
         <input value={user.surname} onChange={handleSurnameChange} />
         <input value={user.address} onChange={handleAddressChange} />
      </>
   );
}

/*
    // Solution

export default function App() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    address: ""
  });

  const handleInputChange = (field) => {
    return (e) => {
      setUser((prev) => ({
        ...prev,
        [field]: e.target.value
      }));
    };
  };

  return (
    <>
      <input value={user.name} onChange={handleInputChange("name")} />
      <input value={user.surname} onChange={handleInputChange("surname")} />
      <input value={user.address} onChange={handleInputChange("address")} />

      {JSON.stringify(user)}
    </>
  );
}
*/
