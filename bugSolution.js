```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); //Use functional update
    }, 1000);
    return () => clearInterval(interval);
  }, [count]); // Added count to the dependency array

  return <div>Count: {count}</div>;
}
```