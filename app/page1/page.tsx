import React from 'react';
import Popup from './popup/page';

const page1 = () => {
  	return (
		<div className='flex flex-col items-center py-8 rounded-md'>
			<h1 className='text-6xl text-center py-8'>Page 1 - Popup</h1>
			<button className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md'>Click me!</button>
			<Popup />
		</div>
  	);
};

export default page1;