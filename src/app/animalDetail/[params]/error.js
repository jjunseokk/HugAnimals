"use client"

import Image from "next/image";
import dog from '../../../img/errorDog.png';
// import Error from "next/error";



export default function Error() {
    return (
        <div className="animal-error">
            <h1>404 Error</h1>
            <h2>문제가 계속 지속된다면 P.junseok53@gmail.com 으로 문의주세요.</h2>
            <Image src={dog} alt="dog" />
        </div>
    )
}