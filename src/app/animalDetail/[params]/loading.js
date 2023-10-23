
import Image from 'next/image';
import dog from '../../../img/dog.gif';

export default function Loading() {

    return (
        <div className="animal-loading">
            <Image src={dog} alt='dog'/>
        </div>
    )
}