import { useEffect, useState } from 'react';

async function fetchUsers() {
   const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
   const users = await response.json();

   return users;
}

export default function Section06Good() {
   // If it doesn't cause errors in your case, it's still a good tone to always initialize it (even with null)
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetchUsers().then(setUsers);
   }, []);

   // You can also add that check
   // if (users.length === 0) return <Loading />

   return (
      <div>
         {users.map(({ id, name, email }) => (
            <div key={id}>
               <h4>{name}</h4>
               <h6>{email}</h6>
            </div>
         ))}
      </div>
   );
}
