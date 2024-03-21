# Using Objects Map Instead of Conditions in React Components

When you need to display various elements based on a variable, using an object map instead of conditions can make your components more declarative, easier to understand, and simpler to extend. This strategy makes it painless to add new functionality in the future.

## Problem

```jsx
function Account({type}) {
  let Component = UsualAccount

  if (type === 'vip') {
    Component = VipAccount
  }

  if (type === 'moderator') {
    Component = ModeratorAccount
  }

  if (type === 'admin') {
    Component = AdminAccount
  }

  return (
    <div className='account'>
      <Component />
      <AccountStatistics />
    </div>
  )
}
```

# Solution

```jsx
const ACCOUNTS_MAP = {
  'vip': VipAccount,
  'usual': UsualAccount,
  'admin': AdminAccount,
  'moderator': ModeratorAccount,
}

function Account({type}) {
  const Component = ACCOUNTS_MAP[type]

  return (
    <div className='account'>
      <Component />
      <AccountStatistics />
    </div>
  )
}

```
