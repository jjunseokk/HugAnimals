import Image from 'next/image';
import '../main.scss'

export default function ProcessBox(props) {
    return (
        <div className='processBox-container'>
            <Image src={props.img} alt='process_1' />
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}