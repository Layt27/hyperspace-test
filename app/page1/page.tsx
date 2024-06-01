'use client';

// Imports
import React, { useState } from 'react';
import Popup from './popup/page';
import Link from 'next/link';

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
			<div className="absolute inset-0 flex justify-center items-center">
        		<Link href="/">
          			<button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md">Go back</button>
        		</Link>
      		</div>
			{showPopup && <Popup />}
		</div>
  	);
};

export default page1;