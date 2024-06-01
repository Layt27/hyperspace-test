// Imports
import Link from 'next/link';

export default function Home() {
  	return (
    	<main className='flex flex-col items-center justify-center min-h-screen'>
      	<h1 className='text-5xl mb-8'>Hyperspace Test</h1>
      	<div className='flex justify-center w-full space-x-16'>
        	<div className='flex flex-col items-start'>
          		<Link href='/page1'>
            		<button className='bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md'>Click to go to page 1</button>
          		</Link>
        	</div>
        	<div className='flex flex-col items-end'>
          		<Link href='/page2'>
            		<button className='bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md'>Click to go to page 2</button>
          		</Link>
        	</div>
      	</div>
    	</main>
  	);
}
