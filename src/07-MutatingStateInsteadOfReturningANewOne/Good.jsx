import { useCallback, useState } from 'react';

export default function Section07Good() {
   const [userInfo, setUserInfo] = useState({
      name: 'Blacklion567',
      surname: 'BK',
   });

   const handleChangeInfo = useCallback((field) => {
      return (e) => {
         // Now it works!
         setUserInfo((prev) => ({
            // So when we update name, surname stays in state and vice versa
            ...prev,
            [field]: e.target.value,
         }));
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
