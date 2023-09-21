'use client'
import Image from "next/image";
import './main.scss'

import AnimalList from "../app/component/AnimalList";

import mainBanner from '../img/mainBanner.png';
import scroll from '../img/scroll.png';
import process from '../img/process.png';
import middleBanner from '../img/middleBanner.png';
import cat from '../img/cat.png';
import cat2 from '../img/cat2.png';
import arrow from '../img/arrow.png';

import { Provider } from "react-redux";
import store from "./redux/store";


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

      <div className="mainProcess">
        <Image src={process} alt="process" />
      </div>

      <Provider store={store}>
        <AnimalList upkind={417000} />
      </Provider>
      <p style={{ textAlign: 'right' }}>더보기</p>
      <Image className="mainMiddleBanner" src={middleBanner} alt="middleBanner" />

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
    </div>
  )
}
