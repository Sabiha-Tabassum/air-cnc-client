import { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import Card from "./Card";
import Loader from "../Shared/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import { getAllRooms } from "../../api/room";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useSearchParams();
    const category = params.get('category')

    useEffect(()=>{
        setLoading(true)
        getAllRooms()
        .then(data => {
            if(category){
                const filtered = data.filter(room => room.category === category)
                setRooms(filtered)
            }
            else {
                setRooms(data)
            }
            
            setLoading(false)
        })
    },[category])

    if (loading) {
        return  <Loader></Loader>
    }

    return (
       <Container>
         {
            rooms && rooms.length > 0 ?  <div className="pt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
               rooms.map((room, index) => <Card
               key={index} room={room}></Card>)
            }
         </div> : <div>
            <Heading title='No room availables in this category'
            subtitle='Please select other categories'
            center={true}>
                
            </Heading>
         </div>
         }
       </Container>
    );
};

export default Rooms;