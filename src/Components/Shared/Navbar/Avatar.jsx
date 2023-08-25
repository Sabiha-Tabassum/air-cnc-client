import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import avatarImg from "../../../assets/images/placeholder.jpg"


const Avatar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <img
                className='rounded-full'
                src={user && user.photoURL ? user.photoURL : avatarImg}
                alt='profile'
                height='30'
                width='30'
            />
        </div>
    );
};

export default Avatar;