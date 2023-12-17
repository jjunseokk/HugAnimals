'use client'
import Image from "next/image";
import './main.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import AnimalList from "../app/component/AnimalList";

import mainBanner from '../img/mainBanner.png';
import scroll from '../img/scroll.png';
import dog from '../../public/dog.svg';
import dogFoot from '../img/dogFoot.png'
import family from '../../public/family.svg';
import hospital from '../../public/hospital.svg';
import money from '../../public/money.svg';
import pet_friendly from '../../public/pet-friendly.svg';
import reading from '../../public/reading.svg';
import veterinary from '../../public/veterinary.svg';
import campaign from '../../public/campaign.svg';

import 'swiper/css';
import 'swiper/css/navigation';

import { Provider } from "react-redux";
import store from "./redux/store";
import Link from "next/link";


export default function Home() {
  const adopt = [
    { "img": dog, "contact": `반려동물과 함께하는 책임감을\n가져야합니다.` },
    { "img": hospital, "contact": `반려동물이 아플 때\n병원을 데려갈 능력이 중요합니다.` },
    { "img": family, "contact": `반려동물을 키우기전 가족들의\n동의가 필요합니다.` },
    { "img": veterinary, "contact": `반려동물들의 예방접종은\n선택이 아니라 필수입니다.` },
    { "img": money, "contact": `반려동물을 키울 수 있는\n능력이 필요합니다.` },
    { "img": reading, "contact": `반려동물을 위해 아이들의\n사전 지식이 필요합니다.` },
    { "img": pet_friendly, "contact": `반려동물을 위해 아이들의\n사전 지식이 필요합니다.` },
  ]


  return (
    <div className="main-container">
      <div className="mainBannerArea">
        <Image className="mainBanner" src={mainBanner} alt="mainBanner" />
        <p className="mainBannerText">
          우리와 함께 하는 <br />
          가족 반려동물 <br />
          <span>사지말고 입양하시는건 어떨까요?</span>
        </p>
        <div className="mainBannerScroll">
          <p>아래로 스크롤 하기</p>
          <Image src={scroll} alt="scroll" />
        </div>
      </div>
      <div className="main-wrap">
        <Provider store={store}>
          <AnimalList upKind={417000} />
        </Provider>
        <Link href={'/animal'}>
          <p className="moreBtn">더보기</p>
        </Link>


        <div className="mainAdopt">
          <div className="adoptTitle">
            <Image src={dogFoot} alt="dogFoot" />
            <p>입양 시 책임 사항</p>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={5}
            spaceBetween={30}
            className="adoptSwiper">
            {adopt.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="item-area">
                    <Image src={item.img} alt="" />
                    <p>{item.contact}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        <div className="campaign">
            <Image src={campaign} alt="campaign" />
            <h2>아이들의 행복을 지켜주세요.</h2>
        </div>
      </div>


    </div >
  )
}
