import { ScaleLoader } from "react-spinners";


const Loader = () => {
    return (
    <div className='flex flex-col justify-center items-center pt-12'>
          <ScaleLoader size={100} color='red' />
    </div>
    );
};

export default Loader;