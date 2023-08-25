import Heading from "../Shared/Heading/Heading";


const Header = ({roomData}) => {
    return (
        <>
            <Heading
                title={roomData.title}
                subtitle={roomData.location}>
            </Heading>

            <div className="w-full overflow-hidden rounded-xl">
                <img className="object-cover " src={roomData.image} alt="image" />
            </div>
        </>
    );
};

export default Header;