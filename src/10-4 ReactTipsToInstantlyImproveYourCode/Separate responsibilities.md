# Separating Responsibilities in React Components

One common mistake developers make when developing React components is creating monolithic components, often referred to as "God" components. These components contain a lot of code that can be difficult to understand and maintain. A better approach is to divide components into smaller, independent sub-modules, each responsible for a specific aspect of the component's functionality.

A typical structure for dividing responsibilities in React components includes:

1. **UI Module**: Responsible for the visual representation of the component.
2. **Logic/Model Module**: Contains the business logic of the component. This could include custom hooks or other logic-related functions.
3. **Utility (Lib) Module**: Contains utility functions required by the component.

Here's how you can implement this structure using a small demo example:

## UI Module

```jsx
// ListComponentItem.js
export function ListComponentItem({ name, onDelete }) {
  return (
    <div className="list-component__item>">
      {trimName(name)}

      <div onClick={onDelete} className="list-component__icon">
        <DeleteIcon />
      </div>
    </div>
  );
}

// ListComponent.js
export function ListComponent() {
  const { list, handleDeleteItem } = useList();

  return (
    <div className="list-component">
      {list.map(({ id, name }) => (
        <ListComponentItem
          key={id}
          name={name}
          onDelete={handleDeleteItem(id)}
        />
      ))}
    </div>
  );
}
```

## Logic/Model Module

```jsx
// useList.js
export function useList() {
  const [list, setList] = useState([]);

  const handleDeleteItem = useCallback((id) => {
    return () => {
      deleteListItem(id, () => {
        setList((prev) => prev.filter((x) => x.id !== id));
      })
    };
  }, []);

  useEffect(() => {
    getList(setList);
  }, []);

  return useMemo(
    () => ({
      list,
      handleDeleteItem
    }),
    [list, handleDeleteItem]
  );
}

```

## Utility (Lib) Module

```jsx
// utils.js
export async function getList(onSuccess) {
  try {
    const resp = await fetch("https://www.url.com/list");
    const data = await resp.json();

    onSuccess(data)
  } catch {
    showAlert({ text: "Something went wrong!" });
  }
}

export async function deleteListItem(id, onSuccess) {
  try {
    fetch(`https://www.url.com/list/${id}`, {
      method: "DELETE"
    });
    onSuccess()
  } catch {
    showAlert({ text: "Something went wrong!" });
  }
}

export function trimName(name) {
  return name.slice(0, 30) + (name.lenght > 30 ? '...' : '')
}

```
