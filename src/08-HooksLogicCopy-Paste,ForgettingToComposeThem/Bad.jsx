import { useCallback, useState } from 'react';

export default function Section08Bad() {
   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');

   const handleNameChange = useCallback((e) => {
      setName(e.target.value);
   }, []);

   const handleSurnameChange = useCallback((e) => {
      setSurname(e.target.value);
   }, []);

   return (
      <div>
         <input value={name} onChange={handleNameChange} />
         <input value={surname} onChange={handleSurnameChange} />
      </div>
   );
}
