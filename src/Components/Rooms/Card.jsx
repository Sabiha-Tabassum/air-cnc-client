import { Link } from "react-router-dom";


const Card = ({room}) => {
    const {image, location, dateRange, price} = room
    return (
        <Link to={`/room/${room._id}`} className='cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full'>
                <div className=' w-full overflow-hidden rounded-xl'>
                    <img className='object-cover h-52 w-full group-hover:scale-110 
                    transition' src={image} alt='Room'/>
                    
                </div>

                <div className='font-semibold text-lg'>{location}</div>
                <div className='font-light text-neutral-500'>
                 {dateRange}
                </div>
                
                 <div className='font-semibold'>$ {price}</div>
                    
                
            </div>
        </Link>
    );
};

export default Card;