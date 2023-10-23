import Link from 'next/link';
import './main.scss';
import notFoundBg from '../img/notFoundBg.png';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='not-found' >
      <Image src={notFoundBg} alt='' />
      <div className='not-found-message'>
        <h1>원하시는 페이지를 찾을 수 없습니다.</h1>
        <h2>요청한 리소스를 찾을 수 없습니다.</h2>
        <button><Link href="/">Return Home</Link></button>
      </div>
    </div>
  )
}