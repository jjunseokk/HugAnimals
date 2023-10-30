'use client'

import './about.scss';
import dog from '../../img/about.gif'
import Image from 'next/image';
import { motion } from "framer-motion";


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
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { // 아이템 애니메이션을 조절합니다.
            duration: 2, // 애니메이션 지속 시간을 조정합니다. 1초로 설정할 수 있습니다.
        }
    }
};

export default function About() {
    return (
        <div className="about-container">
            <div className='about-wrap'>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={item}
                        className='aboutBox'>
                        <Image src={dog} alt='' />
                        <motion.div
                            className='aboutBox-contact'
                        >
                            <motion.h1
                                variants={text}
                            >
                                누구보다 반려동물을 사랑하는 <span >여러분</span> 입니다. <br />
                                귀여운 동물을 사랑하는 <span>HugAnimals</span>와 함께해요
                            </motion.h1>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

        </div>
    )
}