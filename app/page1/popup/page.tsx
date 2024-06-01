'use client'
import React, { useEffect, useState } from 'react'

function Popup() {
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        const button = document.getElementById('triggerPopup')

        const handleClick = () => {
            setShowPopup(true)
        }

        if (button) {
            button.addEventListener('click', handleClick)
        }

        return () => {
            if (button) {
                button.removeEventListener('click', handleClick)
            }
        }
    }, [])
    return (
        <div
            className={`${
                showPopup ? 'flex' : 'hidden'
            } justify-center items-center fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm`}
        >
            <div className="flex flex-col items-center bg-white text-black rounded-md py-4 px-4">
                <h1 className="text-3xl font-bold mb-5">Popup complete!</h1>
                <p>The background should be blurred.</p>
                <p>Click on the button below to close the popup.</p>
                <button
                    onClick={() => setShowPopup(false)}
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 mt-5 rounded-md"
                >
                    Close popup
                </button>
            </div>
        </div>
    )
}

export default Popup
