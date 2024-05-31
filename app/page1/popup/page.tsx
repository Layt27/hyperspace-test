import React from 'react';

function Popup() {
	return (
		<div className='flex justify-center items-center fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm'>
			<div className='flex flex-col items-center bg-white text-black rounded-md py-4 px-4'>
				<h1 className='text-3xl font-bold mb-5'>Popup complete!</h1>
				<p>The background should be blurred.</p>
				<p>Click on the button below to close the popup.</p>
				<button className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 mt-5 rounded-md'>Close popup</button>
			</div>
		</div>
	);
};

export default Popup;