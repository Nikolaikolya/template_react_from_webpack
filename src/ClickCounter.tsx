import { useState } from 'react';

export const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>Plus</button>
    </div>
  );
};
