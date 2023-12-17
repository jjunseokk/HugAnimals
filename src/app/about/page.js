'use client'

import './about.scss';
import Image from 'next/image';
import { motion } from "framer-motion";

import dog from '../../img/about.gif'
import about_1 from '../../../public/about_img_1.svg';
import about_2 from '../../../public/about_img_2.svg';
import about_3 from '../../../public/about_img_3.svg';
import ItemBox from './component/ItemBox';



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

export default function About() {

    const data = [
        { "img": about_1, "title": '유기동물을 지켜줘요', 'contact': '저희 HugAnimals는 이미 가족을 잃은 아이들이거나 가족이 없었던\n아이들입니다. 저희는 아이들의 행복을 위합니다.', 'btn': '더 많은 유기동물 보러가기' },
        { "img": about_2, "title": '전국 각 보호센터가 있어요', 'contact': '저희 HugAnimals는 전국에 보호센터가 있어 유기된 아이들을\n구조하고 있습니다.', 'btn': '보호센터 보러가기' },
        { "img": about_3, "title": '올바른 반려동물 문화', 'contact': '꾸준한 관리로 올바른 반려동물 문화를 만들어\n동물이 행복한 세상이 될 수 있도록 노력하고 있습니다.', 'btn': '후원하러 가기' },
    ]
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
                                아이들의 <span >가족</span>이 되어주세요.<br />
                                <span>사지</span>말고, <span>입양</span>하세요.
                            </motion.h1>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className='aboutBox-second'
                    >
                        <motion.h1
                            variants={text}
                            className='subTitle'
                        >HugAnimals는?</motion.h1>
                        <motion.p
                            variants={text}
                        >
                            <span>HugAnimals</span>는 유기된 아이들의 가족을 찾는 일을 하고 있어요.<br />
                            함께 동참해 아이들의 가족이 되어주세요.
                        </motion.p>
                        <ItemBox 
                            img={about_1}
                            title='유기동물을 지켜줘요'
                            contact={`저희 HugAnimals는 이미 가족을 잃은 아이들이거나 가족이 없었던\n아이들입니다. 저희는 아이들의 행복을 위합니다.`}
                            btn='더 많은 유기동물 보러가기'
                        />
                        <ItemBox 
                            img={about_2}
                            title='전국 각 보호센터가 있어요'
                            contact={`저희 HugAnimals는 전국에 보호센터가 있어 유기된 아이들을\n구조하고 있습니다. 저희는 아이들의 행복을 위합니다.`}
                            btn='보호센터 보러가기'
                            right={true}
                        />
                        <ItemBox 
                            img={about_3}
                            title='올바른 반려동물 문화'
                            contact={`꾸준한 관리로 올바른 반려동물 문화를 만들어\n동물이 행복한 세상이 될 수 있도록 노력하고 있습니다.`}
                            btn='후원하러 가기'
                        />
                    </motion.div>
                </motion.div>
            </div>

        </div>
    )
}