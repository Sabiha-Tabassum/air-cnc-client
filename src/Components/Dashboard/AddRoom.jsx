import { useContext, useState } from "react";
import AddRoomForm from "../Form/AddRoomForm";
import { imageUpload } from "../../api/image";
import { AuthContext } from "../../Provider/AuthProvider";
import { addRoom } from "../../api/room";




const AddRoom = () => {
    const {user} = useContext(AuthContext);
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      })
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
   

     const handleSubmit = event => {
       event.preventDefault();
       setLoading(true);
       const location = event.target.location.value
       const title = event.target.title.value
       const price = event.target.price.value
       const total_guest = event.target.total_guest.value
       const rooms = event.target.rooms.value
       const description = event.target.description.value
       const category = event.target.category.value
       const from = dates.startDate
       const to = dates.endDate
       const image = event.target.image.files[0]

       imageUpload(image)
       .then(data => {
        const roomData = {
        image: data.data.display_url, location,title,price,total_guest,rooms,description,category, from, to,
        host: {
            name: user?.displayName, image: user?.photoURL, email: user?.email
        }

    }

       addRoom(roomData).then(data => console.log(data)).catch(err => console.log(err))
        console.log(roomData)
        setLoading(false)
       })
        
       .catch(err => console.log(err.message))
       
     }



     const handleImageChange = image =>{
        setUploadButtonText(image.name)
     }

     const handleDates = ranges => {
      console.log(ranges.selection)
        setDates(ranges.selection)
     }

    return (
       <div>
        <AddRoomForm handleSubmit={handleSubmit} loading={loading} handleImageChange={handleImageChange} uploadButtonText={uploadButtonText} dates={dates} handleDates={handleDates}></AddRoomForm>
       </div>
    );
};

export default AddRoom;