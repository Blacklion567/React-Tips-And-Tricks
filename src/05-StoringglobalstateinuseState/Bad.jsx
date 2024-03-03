// useState is only suitable to store components local states. This could include input value, toggle flags and etc. Global state belongs to the app as a whole, it doesn’t relate only to one specific component. If your data is used within multiple pages or widgets — consider putting it into a global state (React Context, Redux, MobX and etc).

// Let’s go through that example. It is really simple, but let’s assume that we are going to have a much more complex app soon. So component hierarchy will be really deep and the user state will be used all over the app. In that case, we should separate our state into the global scope, so it can be easily accessed from any point of the app (and we don’t have to pass props 20–40 levels down).

import { useState } from 'react';

// Passing props
function PageFirst(user) {
  return user.name;
}

// Passing props
function PageSecond(user) {
  return user.surname;
}

// No Display Error
export default function Section05Bad() {
  // User state will be used all over the app. We should replace useState
  const [user] = useState({ name: 'Blacklion567', surname: 'BK' });

  return (
    <>
      <PageFirst user={user} />
      <PageSecond user={user} />
    </>
  );
}
