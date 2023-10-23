'use client'
import Image from "next/image";
import './main.scss'

import AnimalList from "../app/component/AnimalList";

import mainBanner from '../img/mainBanner.png';
import scroll from '../img/scroll.png';
import process_1 from '../img/process_1.png';
import process_2 from '../img/process_2.png';
import process_3 from '../img/process_3.png';
import process_4 from '../img/process_4.png';
import process_5 from '../img/process_5.png';
import process_6 from '../img/process_6.png';
import middleBanner from '../img/middleBanner.png';
import cat from '../img/cat.png';
import cat2 from '../img/cat2.png';
import arrow from '../img/arrow.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Provider } from "react-redux";
import store from "./redux/store";
import ProcessBox from "./component/ProcessBox";


export default function Home() {



  return (
    <div className="main">
      <div className="mainBannerArea">
        <Image className="mainBanner" src={mainBanner} alt="mainBanner" />
        <p className="mainBannerText">
          우리와 함께 하는 <br />
          가족 반려동물 <br />
          <span>사지말고 입양하시는건 어떨까요?</span>
        </p>
        <div className="mainBannerScroll">
          <Image src={scroll} alt="scroll" />
        </div>
      </div>

      {/* <div className="mainProcess">
        <Image src={process} alt="process" />
      </div> */}
      <div className="mainProcess">
        <div className="mainProcess-titleBox">
          <p>
            반려동물 <br />
            입양 전 <br />
            <strong>체크리스트</strong>
          </p>
        </div>
        <ProcessBox img={process_1} title="" text="반려동물을 맞이할 환경적 준비, 마음의 각오" />
        <ProcessBox img={process_2} text="한번 인연을 맺은 동물과 끝까지 책임지고 보살피겠다는 결심" />
        <ProcessBox img={process_3} text="모든 가족과의 합의" />
        <ProcessBox img={process_4} text="반려동물을 위해 공부할 각오" />
        <ProcessBox img={process_5} text="아플 때 치료와 중성화수술 실천" />
        <ProcessBox img={process_6} text="경제적 부담을 짊어질 의사와 능력" />
      </div>

      <Provider store={store}>
        <AnimalList upkind={417000} />
      </Provider>
      <p className="moreBtn">더보기</p>
      <div className="mainAnimalInformation">
        <div className="mainLeftArea" >
          <h1 className="title">동물 보호법 <br /> 자세히 알고가기</h1>
          <Image className="cat" src={cat} alt="cat" />
          <div className="mainLeftBox">
            <Image className="arrow" src={arrow} alt="" />
          </div>
        </div>

        <div className="mainRightArea" onClick={() => { window.open("https://www.animal.go.kr/front/index.do") }}>
          <h1 className="title">동물보호소 <br /> 구경하기</h1>
          <Image className="cat" src={cat2} alt="cat" />
        </div>
      </div>
    </div >
  )
}
