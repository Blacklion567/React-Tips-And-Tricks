import { useEffect, useState } from 'react';

// Fetch users func. I don't handle error here, but you should always do it!
async function fetchUsers() {
   const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
   const users = await usersResponse.json();

   return users;
}

export default function App() {
   // No initial state here, so users === undefined, until setUsers
   const [users, setUsers] = useState();

   useEffect(() => {
      fetchUsers().then(setUsers);
   }, []);

   return (
      <div>
         {/* Error, can't read properties of undefined */}
         {users.map(({ id, name, email }) => (
            <div key={id}>
               <h4>{name}</h4>
               <h6>{email}</h6>
            </div>
         ))}
      </div>
   );
}
