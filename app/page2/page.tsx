// Imports
import React from 'react'
import Link from 'next/link'
import MotionContainer from '@/components/shared/MotionContainer'

const page2 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-80">
            <MotionContainer
                className="bg-violet-300 w-24 px-10 py-10 rounded-md mb-16"
                animate={{
                    rotate: [0, 320, 320, 0],
                    x: [0, 400, 400, 0, 0, -400, -400, 0],
                }}
                transition={{ duration: 1.3, repeat: Infinity }}
            ></MotionContainer>
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
