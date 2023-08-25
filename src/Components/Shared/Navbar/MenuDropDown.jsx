import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import HostRequestModal from '../../Modal/HostRequestModal';
import { becomeHost } from '../../../api/auth';
import { toast } from 'react-hot-toast';

const MenuDropDown = () => {
    const { user, logOut, role, setRole } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);

console.log(role)

    const modalHandler = email => {
       becomeHost(email)
       .then(data => {
        console.log(data)
        toast.success('You are host now, Post Rooms')
        setRole('host')
        closeModal()
       }) 
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-2'>

                <div  className='hidden md:block font-semibold py-3 px-4 rounded-full '>
                  {!role && (
                     <button className='cursor-pointer hover:bg-neutral-100 ' onClick={() => setModal(true)} disabled={!user}>AirCNC your home</button>
                  )}
                </div>

                <div onClick={() => setIsOpen(!isOpen)}
                    className='p-2 md:py-1 md:px-2 border-2 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md '
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-40 md:w-52 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link
                            to='/'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Home
                        </Link>
                        {user ? (

                            <>
                                <Link
                                    to='/dashboard' className='px-4 py-3 hover:bg-neutral-100 font-semibold'
                                >
                                    Dashboard
                                </Link>

                                <div
                                    onClick={() =>  {
                                        
                                        logOut()}}
                                    className='px-4 py-3 hover:bg-neutral-100 font-semibold cursor-pointer'
                                >
                                    Logout
                                </div>
                            </>

                        ) : (
                            <>
                                <Link to='/login' className='px-4 py-3 hover:bg-neutral-100 font-semibold'
                                >
                                  Login
                                </Link>

                                <Link to='/signup' className='px-4 py-3 hover:bg-neutral-100 font-semibold'
                                >
                                 Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
            <HostRequestModal email={user?.email} modalHandler={modalHandler} isModalOpen={modal} closeModal={closeModal} ></HostRequestModal>
        </div>
    );
};

export default MenuDropDown;