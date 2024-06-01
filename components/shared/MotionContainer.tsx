'use client';
import React from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

type Props = HTMLMotionProps<'div'> & {
    children: React.ReactNode
}

const MotionContainer = ({ children, ...rest }: Props) => {
    return <motion.div {...rest}>{children}</motion.div>
}

export default MotionContainer