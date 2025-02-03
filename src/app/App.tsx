import { useState } from 'react';

import { Button } from '@/components/Button';
import { Counter } from '@/components/Counter';

export const App = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCounter, setIsCounter] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setIsCounter(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className='app'>
      <Counter quantity={100} size='xl' />
      <Button
        counter={isCounter}
        loading={isLoading}
        size='large'
        variant='secondary'
        onClick={handleClick}
        // disabled
        // style={{ width: 100 }}
      >
        <Button.Group>
          <Button.Label>Что сделать</Button.Label>
          <Button.Count count={count} />
        </Button.Group>
        <Button.Loader />
      </Button>
    </div>
  );
};
