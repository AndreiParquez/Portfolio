import React from 'react';
import c from '../assets/c.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import k from '../assets/k.png';
import m from '../assets/m.png';
import n from '../assets/n.png';

const Tech = () => {
  return (
    <div className="flex justify-center items-center px-5 ">
      <div className='bg-zinc-800 w-[500px] rounded-lg border-2 border-green-500 pt-2'>
        <p className='text-white font-bold text-lg text-center mb-2'>Tech:</p>
        <div className='md:flex flex-wrap gap-4 text-2xl flex justify-center mb-9'>
          <img src={c} className='h-[30px] md:h-[40px] md:block' alt='C' />
          <img src={css} className='h-[30px] md:h-[40px] md:block' alt='CSS' />
          <img src={html} className='h-[30px] md:h-[40px] md:block' alt='HTML' />
          <img src={js} className='h-[30px] md:h-[40px] md:block' alt='JavaScript' />
          <img src={m} className='h-[30px] md:h-[40px] md:block' alt='M' />
          <img src={n} className='h-[30px] md:h-[40px] md:block' alt='N' />
        </div>
      </div>
    </div>
  );
}

export default Tech;
