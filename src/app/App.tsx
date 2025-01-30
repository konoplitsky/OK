import { useState } from 'react';
import { Button } from '../ui/Button/Button.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'></a>
        <a href='https://react.dev' target='_blank'></a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button
          size='medium'
          counter={true}
          label='Что сделать'
          count={count}
          onClick={() => setCount((count) => count + 1)}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
