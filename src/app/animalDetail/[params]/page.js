'use client'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './animalDetail.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import Image from 'next/image';

import detailBanner from '../../../img/detailBanner.png';
import girl from '../../../img/girl.png';
import man from '../../../img/man.png';

export default function AnimalDetail(props) {
    // 나이
    const [kind, setKind] = useState();

    // 배열로 들어온 데이터를 변환해서 받는다.
    let detailData = JSON.parse(props.searchParams.itemList);
    console.log("데이터", detailData);

    // 공백을 기준으로
    let kindSpace = detailData.kindCd.indexOf(' ');

    // 첫 번째 공백 이후의 텍스트만 남기고 한번만 실행
    useEffect(() => {
        if (kindSpace !== -1) {
            const newKind = detailData.kindCd.substring(kindSpace + 1); // 첫 번째 공백 이후의 텍스트만 남김
            setKind(newKind);
        } else {
            setKind(detailData.kind);
        }
    }, [])

    // 현재시간을 받아 년도를 추출
    const date = new Date;
    const year = date.getFullYear();

    // 데이터의 나이를 받아 괄호를 기준으로 전 데이터를 추출
    let age = detailData.age.indexOf('(');
    let newAge = detailData.age.substring(0, age);


    return (
        <div className="detail-container">
            <div className='detail-top'>
                <h2>입양 하기</h2>
                <button className='detail-adoption-btn'><FontAwesomeIcon className='detail-heart' icon={faHeart} />입양 신청하기</button>
            </div>
            <div className='detail-wrap'>
                <p className='detail-title'>[{props.params.params}] {kind} </p>
                <Image className='detail-banner' src={detailBanner} alt='' />
                <div className='detail-profile'>
                    <div className='detail-profile-img'>
                        <Image width={300} height={300} src={detailData.popfile} alt='' />
                    </div>
                    <div className='detail-profile-text'>
                        <p>나이 : {year - newAge}살 추정{detailData.age}</p>
                        <p>성별 : {detailData.sexCd === "F" ? <Image width={15} height={15} src={girl} alt='' /> : <Image width={15} height={15} src={man} alt='' />}</p>
                        <p>색상 : {detailData.colorCd}</p>
                        <p>몸무게 : {detailData.weight} </p>
                        <p>특징 : {detailData.specialMark}</p>
                        <p>중성화 : {detailData.neuterYn === "N" ? "중성화 미완료" : detailData.neuterYn === "Q" ? "미상" : "중성화 완료"}</p>
                        <p>입양상태 : {detailData.processState}</p>
                        <p>발견 장소 : {detailData.happenPlace}</p>
                    </div>
                </div>
                <div className='detail-information'>
                    <h1>입양동물 의료 분담금 발생</h1>
                    <p>
                        HugAnimals의 모든 보호동물은 구조 과정에서부터 병원 진료와 예방 접종 등의 의료비가 발생합니다.
                        동물입양 의료분담금은 보호동물에게 사용되는 의료 비용에 대한 최소한의 비용입니다.
                    </p>
                </div>
            </div>
        </div>
    )
}

