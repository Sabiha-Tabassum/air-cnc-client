import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string';


const CategoryBox = ({item}) => {

    const [params, setParams] = useSearchParams();
    
    const navigate = useNavigate()
    const {label, icon: Icon} = item

    const handleClick = () => {
        let currentQuery = {}
        if (params) {
          currentQuery = qs.parse(params.toString())
        }
        const updatedQuery = {
          ...currentQuery,
          category: label,
        }
    
        const url = qs.stringifyUrl(
          {
            url: '/',
            query: updatedQuery,
          },
          { skipNull: true }
        )
    
        navigate(url)
      
    }

    return (
        <div onClick={handleClick} className="flex flex-col justify-between items-center text-slate-500 hover:text-slate-950 cursor-pointer
        ">
            <Icon></Icon>
            <div>{label}</div>
            
        </div>
    );
};

export default CategoryBox;