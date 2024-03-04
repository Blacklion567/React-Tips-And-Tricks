import { useCallback, useState } from 'react';

export default function Section07Bad() {
   // Initialize State
   const [userInfo, setUserInfo] = useState({
      name: 'Blacklion567',
      surname: 'BK',
   });

   // field is either name or surname
   const handleChangeInfo = useCallback((field) => {
      // e is input onChange event
      return (e) => {
         setUserInfo((prev) => {
            // Here we are mutating prev state.
            // That simply won't work as React doesn't recognize the change
            prev[field] = e.target.value;

            return prev;
         });
      };
   }, []);

   return (
      <div>
         <h2>{`Name = ${userInfo.name}`}</h2>
         <h2>{`Surname = ${userInfo.surname}`}</h2>

         <input value={userInfo.name} onChange={handleChangeInfo('name')} />
         <input value={userInfo.surname} onChange={handleChangeInfo('surname')} />
      </div>
   );
}
