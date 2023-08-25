import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Rooms/Header";
import RoomInfo from "../../Components/Rooms/RoomInfo";
import RoomReservation from "../../Components/Rooms/RoomReservation";
import Container from "../../Components/Shared/Container/Container";


const RoomDetails = () => {
    const roomData = useLoaderData();
    console.log(roomData)
    return (
        <Container>
            <div className="flex flex-col gap-4">
                <Header roomData={roomData}></Header>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-44">
                    <RoomInfo roomData={roomData}></RoomInfo>
                    <div className="order-first md:order-last">
                        <RoomReservation roomData={roomData}></RoomReservation>
                    </div>

                </div>

            </div>

        </Container>
    );
};

export default RoomDetails;