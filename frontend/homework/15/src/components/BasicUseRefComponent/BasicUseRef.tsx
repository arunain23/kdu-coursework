import { useRef , useState} from 'react'

export const BasicUseRef = () => {

    const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    countRef.current += 1;
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Ref Count: {countRef.current}</p>
      <p>State Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
    );
}

export default BasicUseRef;
