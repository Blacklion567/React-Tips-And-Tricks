# Separating Independent Variables from React Component Lifecycle

Separating logic that doesn’t rely on React component lifecycle methods from the component itself can enhance code clarity and maintainability. By explicitly defining dependencies outside of the component, it becomes easier to understand and maintain.

## Problem

```jsx
function useItemsList() {
  const defaultItems = [1, 2, 3, 4, 5]
  const [items, setItems] = useState(defaultItems)

  const toggleArrayItem = (arr, val) => {
    return arr.includes(val) ? arr.filter(el => el !== val) : [...arr, val];
  }

  const handleToggleItem = (num) => {
    return () => {
      setItems(toggleArrayItem(items, num))
    }
  }

  return {
    items,
    handleToggleItem,
  }
}
```

# Solution

```jsx
const DEFAULT_ITEMS = [
  1, 2, 3, 4, 5
]

const toggleArrayItem = (arr, val) => {
  return arr.includes(val) ? arr.filter(el => el !== val) : [...arr, val];
}

function useItemsList() {
  const [items, setItems] = useState(DEFAULT_ITEMS)

  const handleToggleItem = (num) => {
    return () => {
      setItems(toggleArrayItem(items, num))
    }
  }

  return {
    items,
    handleToggleItem,
  }
}

```
