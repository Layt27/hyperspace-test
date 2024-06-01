// Imports
import React from 'react';
import Link from 'next/link';

const page2 = () => {
  	return (
		<div>
			Click to see some magic happen
			<div className="absolute inset-0 flex justify-center items-center">
        		<Link href="/">
          			<button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md">Go back</button>
        		</Link>
      		</div>
		</div>
  	)
};

export default page2;