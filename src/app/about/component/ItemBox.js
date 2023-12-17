'use client'

import '../about.scss';
import Image from 'next/image';
import { motion } from "framer-motion";

import arrowBtn from '../../../../public/arrowBtn.svg';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.9
        }
    }
};

const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { // 아이템 애니메이션을 조절합니다.
            duration: .5, // 애니메이션 지속 시간을 조정합니다. 1초로 설정할 수 있습니다.
        }
    }
};

const text = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { // 아이템 애니메이션을 조절합니다.
            duration: 2, // 애니메이션 지속 시간을 조정합니다. 1초로 설정할 수 있습니다.
        }
    }
};

export default function ItemBox({ title, contact, btn, img, right }) {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className='itemContainer'
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className={right == true ? 'aboutItem right' : 'aboutItem'}
            >
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className='itemBox'
                >
                    <Image src={img} alt='about' />
                    <motion.div>
                        <motion.p
                            variants={text}
                            className='title'>{title}</motion.p>
                        <motion.p
                            variants={text}
                            className='contact'>{contact}</motion.p>
                        <motion.button
                            variants={text}

                        >{btn}</motion.button> <Image src={arrowBtn} alt='arrowBtn' />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}