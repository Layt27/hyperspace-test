// Imports
import React from 'react'
import Popup from './popup/page'
import Link from 'next/link'

const page1 = () => {
    return (
        <div className="flex flex-col items-center py-8 rounded-md">
            <h1 className="text-6xl text-center py-8">Page 1 - Popup</h1>
            <button
                id="triggerPopup"
                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md"
            >
                Click me!
            </button>

            <div className="flex justify-center items-center min-h-56">
                <Link href="/">
                    <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md">
                        Go back
                    </button>
                </Link>
            </div>
            <Popup />
        </div>
    )
}

export default page1
