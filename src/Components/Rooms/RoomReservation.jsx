
import { useContext, useState } from "react";
import Calender from "./Calender";

import BookingModal from "../Modal/BookingModal";
import { formatDistance } from "date-fns";
import { addBooking, updateStatus } from "../../api/booking";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";




const RoomReservation = ({ roomData }) => {

    const { user, role } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

   
    const totalPrice = parseFloat(
        formatDistance(new Date(roomData.to), new Date(roomData.from)).split(' ')[0]
    ) * roomData.price

    console.log(totalPrice)

    const [value, setValue] = useState({
        startDate: new Date(roomData?.from),
        endDate: new Date(roomData?.to),
        key: 'selection',
    })


    const [bookingInfo, setBookingInfo] = useState({
        guest: { name: user?.displayName, email: user?.email, image: user?.photoURL },
        host: roomData.host.email, location: roomData.location, title: roomData.title, price: totalPrice,
        to: value.endDate, from: value.startDate,
        roomID: roomData._id, image: roomData.image
    })

    console.log(bookingInfo)

    const modalHandler = () => {

        addBooking(bookingInfo)
            .then(data => {
                console.log(data)
                updateStatus(roomData._id, true)
                    .then(data => {
                        console.log(data)
                        toast.success('Booking Successful')
                        navigate('/dashboard/dashboard/my-bookings')
                        closeModal()
                    })
                    .catch(err => {
                        console.log(err)
                        closeModal()
                    })

            })

            .catch(err => {
                console.log(err)
                closeModal()
            })

    }


    const handleSelect = ranges => {
        
        setValue({...value})
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className="border-2 rounded-xl overflow-hidden w-96 ">
            <div className='flex flex-row items-center gap-1 p-4'>

                <div className='text-2xl font-semibold'>$ {roomData.price}</div>

            </div>
            <hr />
            <Calender handleSelect={handleSelect} value={value} ></Calender>
            <hr />
            <div className="p-4 text-center text-white bg-rose-500 rounded-xl">
                <button onClick={() => setIsOpen(true)} disabled={roomData.host.email === user?.email || roomData.booked}>Reserve</button>
            </div>

            <hr />
            <div className="flex flex-row justify-between items-center p-4">
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>
            <BookingModal isOpen={isOpen} modalHandler={modalHandler} closeModal={closeModal} bookingInfo={bookingInfo}></BookingModal>
        </div>
    );
};

export default RoomReservation;