'use client';

// Imports
import React, { useState } from 'react';
import Popup from './popup/page';

const page1 = () => {
	const [showPopup, setShowPopup] = useState(false);

  	return (
		<div className='flex flex-col items-center py-8 rounded-md'>
			<h1 className='text-6xl text-center py-8'>Page 1 - Popup</h1>
			<button
				onClick={() => setShowPopup(true)}
				className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md'>
				Click me!
			</button>
			{showPopup && <Popup />}
		</div>
  	);
};

export default page1;