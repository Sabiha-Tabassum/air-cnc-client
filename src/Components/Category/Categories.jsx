import Container from "../Shared/Container/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";


const Categories = () => {
    return (
        <Container>
            <div className="flex flex-row justify-between items-center overflow-x-auto">
                {
                   categories.map(item => (<CategoryBox
                   key={item.label}
                   item={item}></CategoryBox>))
                }
            </div>
        </Container>
    );
};

export default Categories;