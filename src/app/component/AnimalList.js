'use client'
import '../component/animalList.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Action } from '../redux/action/action';
import Image from 'next/image';
import Link from 'next/link';

import cat from '../../img/cat.gif';
import dogFoot from '../../img/dogFoot.png';
import girl from '../../img/girl.png';
import man from '../../img/man.png';

export default function AnimalList(props) {
    // 디스패치
    const dispatch = useDispatch();

    // 리덕스 데이터를 불러온다.
    const animalList = useSelector((state) => state.animal.animal?.response?.body?.items.item);

    // 리덕스 데이터를 불러온다.
    const loading = useSelector((state) => state.animal);
    // console.log("데이터", animalList)

    // 리덕스에 액션을 취해서 store에 저장한다.
    const getAnimals = () => {
        dispatch(Action.getAnimals(props.upkind));
    }

    // 한번만 실행
    useEffect(() => {
        getAnimals();
    }, [])

    return (
        <div className='animal-container'>
            <div className='title'>
                <div>
                    <Image src={dogFoot} alt='' />
                    <h2>유기동물 <span style={{ fontSize: "0.5em" }}>가로로 스크롤 해보세요.</span></h2>
                </div>
                <div>
                    <button onClick={() => { dispatch(Action.getAnimals("417000")) }}>강아지</button>
                    <button onClick={() => { dispatch(Action.getAnimals("422400")) }}>고양이</button>
                </div>
            </div>
            {loading.loading === true ? (<Loading />) : (
                <div className='animal-box'>
                    {animalList && animalList
                        .filter((item) => item.processState === "보호중")
                        .map((item, index) => {
                            return (
                                <div className='animal-list' key={index}>
                                    <Link
                                        href={{
                                            pathname: `/animalDetail/${item.desertionNo}`,
                                            query: {
                                                itemList: JSON.stringify(item),
                                            },
                                        }}
                                    >
                                        <Image width={200} height={200} src={item.popfile} alt='' />
                                        <div className='animal-information'>
                                            <p>성별 : {item.sexCd === "F" ? <Image width={15} height={15} src={girl} alt='' /> : <Image width={15} height={15} src={man} alt='' />}</p>
                                            <p>색상 : {item.colorCd}</p>
                                            <p>보호소 / 보호 장소 : {item.careNm} / {item.careAddr}</p>
                                            <p>보호소 연락처 : {item.careTel}</p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                </div>
            )}

        </div>
    )
}

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <Image width={200} src={cat} alt='' />
        </div>
    )
}