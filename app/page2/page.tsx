// Imports
import React from 'react'
import Link from 'next/link'
import MotionContainer from '@/components/shared/MotionContainer'

const page2 = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-pink-700 w-24 px-10 py-10 rounded-md">
                <MotionContainer
                    initial={{ scale: 0 }}
                    animate={{ x: 200, scale: 2 }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    hello
                </MotionContainer>
            </div>
            <div className="flex justify-center items-center">
                <Link href="/">
                    <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md">
                        Go back
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default page2
