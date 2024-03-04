import { useCallback, useState } from 'react';

function useInput(defaultValue = '') {
   // We declare this state only once!
   const [value, setValue] = useState(defaultValue);

   // We write this handler only once!
   const handleChange = useCallback((e) => {
      setValue(e.target.value);
   }, []);

   // Cases when we need setValue are also possible
   return [value, handleChange, setValue];
}

export default function Section08Good() {
   const [name, onChangeName] = useInput('Blacklion567');
   const [surname, onChangeSurname] = useInput('BK');

   return (
      <div>
         <input value={name} onChange={onChangeName} />
         <input value={surname} onChange={onChangeSurname} />
      </div>
   );
}
