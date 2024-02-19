import { FC } from 'react';

const Timer: FC = () => {
  return (
    <div className='w-60 h-60 sm:h-80 sm:w-80 border-2 border-white flex items-center justify-center rounded-full'>
      <span className='text-7xl text-white'>00:00</span>
    </div>
  )
};

export default Timer;


