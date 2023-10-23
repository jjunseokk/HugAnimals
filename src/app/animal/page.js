'use client'

import './animal.scss'
import Image from "next/image";
import Link from 'next/link';
import { Action } from '../redux/action/action';
import { Provider, useDispatch, useSelector } from 'react-redux';

import animalBanner from '../../img/animalBanner.png'
import store from '../redux/store';
import { useEffect, useState } from 'react';

import catLoading from '../../img/catLoading.gif';


export default function Animal() {
    const category = ["전체", "개", "고양이"]
    const [getCategory, setGetCategory] = useState("전체");

    return (
        <div className="animal">
            <Image src={animalBanner} alt="" />
            <div className='animal-category-btn'>
                {category.map((item, index) => {
                    return (
                        <button className={item === getCategory ? 'active' : 'notActive'} onClick={() => { setGetCategory(item) }} key={index}>{item}</button>
                    )
                })}
            </div>
            <Provider store={store}>
                <AnimalBox category={getCategory} />
            </Provider>
        </div>
    )
}

const AnimalBox = (props) => {
    const dispatch = useDispatch();
    const animal = useSelector((state) => state.animal);

    // 유저가 선택한 페이지를 저장
    const [getPage, setGetPage] = useState(1);

    // console.log(props.category);
    // console.log(getPage);

    // props에 카테고리를 받아서 데이터를 배열로 저장한다.
    const postData = [props.category, getPage]

    // 페이지 스테이트
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 한 페이지당 보여줄 항목 수

    // 리덕스에 액션을 취해서 store에 저장한다.
    const getAnimals = () => {
        dispatch(Action.getAnimalList(postData));
    }

    // 동물 리스트를 나타냄
    const animalList = animal.animal_list?.response.body?.items?.item;

    // 로딩
    const loading = animal.loading;

    // 페이지 토탈 
    const totalCount = animal.animal_list?.response?.body?.totalCount;
    // 한페이지 결과 수
    const numOfRows = animal.animal_list?.response?.body?.numOfRows;

    // 토탈페이지를 한 페이지에 나타나는 결과를 나눈다.
    const totalPagination = Math.ceil(totalCount / numOfRows);

    // 페이지네이션을 빈 배열로 만들고 배열을 현재 페이지에 10개씩만 보이게 한다.
    const pagination = [];

    // start 번호를 지정한다.
    const startIndex = (currentPage - 1) * itemsPerPage;

    // end 번호를 지정
    const endIndex = Math.min(startIndex + itemsPerPage, totalPagination);

    // start번호 부터 end번호 까지 하나씩 증가해서 배열에 넣기
    for (let i = startIndex + 1; i <= endIndex; i++) {
        pagination.push(i);
    }

    // 페이지를 변경할 때 호출되는 함수
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        getAnimals();
    }, [getPage, props.category])

    return (
        <>
            <div className='animalBox'>
                {loading === true ? (
                    <div className='animal-loading'>
                        <Image src={catLoading} alt='' />
                        <p>귀여운 아기들을 불러오는 중입니다. 잠시만 기다려주세요.</p>
                    </div>
                ) : (
                    <>
                        {animalList?.map((item, index) => {
                            // 품종을 받아 [개]/[고양이]를 제거
                            let kindSpace = item.kindCd.indexOf(' ');
                            const newKind = item?.kindCd.substring(kindSpace + 1); // 첫 번째 공백 이후의 텍스트만 남김

                            // age를 받아 년생 제거
                            const date = new Date;
                            const year = date.getFullYear();

                            let age = item.age.indexOf('(');
                            let newAge = item.age.substring(0, age);
                            console.log(item.popfile)
                            return (
                                <div className='animalBox-Box' key={index}>

                                    <Image width={200} height={200} src={item.popfile} alt='' />
                                    {item.processState === "보호중" ? (
                                        <Link
                                            href={{
                                                pathname: `/animalDetail/${item.desertionNo}`,
                                                query: {
                                                    itemList: JSON.stringify(item),
                                                },
                                            }}
                                        >
                                            <div className='animalBox-information'>
                                                <p>나이 : {year - newAge === 0 ? "60일 미만" : `${year - newAge}살`}</p>
                                                <p>품종 : {newKind}</p>
                                                <p>색상 : {item.colorCd}</p>
                                                <p>보호소 : {item.careNm}</p>
                                                <p>전화번호 : {item.careTel}</p>
                                            </div>
                                        </Link>

                                    ) : (
                                        <div className='animalBox-information'>
                                            <p>{item.processState}</p>
                                        </div>
                                    )
                                    }

                                </div >
                            )
                        })}

                    </>
                )}

            </div >
            {loading === true ? (
                <div className='animalBox-pagination'>
                    <div className='pagination'>
                        <button onClick={() => handlePageChange(currentPage - 1)}>&lt;</button>
                        <button>...</button>
                        <button onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
                    </div>
                </div>) : (
                <div className='animalBox-pagination'>
                    <div className='pagination'>
                        {currentPage > 1 && (
                            <>
                                <button onClick={() => handlePageChange(1)}>&lt;&lt;</button>
                                <button onClick={() => handlePageChange(currentPage - 1)}>&lt;</button>
                            </>

                        )}
                        {pagination.map((item, index) => {
                            return (
                                <button className={item === getPage ? 'active' : 'notActive'} key={index} onClick={() => { setGetPage(item) }}>{item}</button>
                            );
                        })}
                        {endIndex == totalPagination ? (
                            <></>
                        ) : (
                            <>
                                <button onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
                                <button onClick={() => handlePageChange(totalPagination / 10)}>&gt;&gt;</button>
                            </>
                        )}
                    </div>
                </div>
            )}

        </>


    )
}