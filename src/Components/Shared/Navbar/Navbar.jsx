import Container from "../Container/Container";
import Logo from "./Logo";
import MenuDropDown from "./MenuDropDown";
import Search from "./Search";


const Navbar = () => {
    return (
        <div className="fixed w-full bg-white shadow-sm">
            <div className="py-4 border-b-2">
               <Container>
                 <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <Logo></Logo>
                    <Search></Search>
                    <MenuDropDown></MenuDropDown>
                 </div>
               </Container>
            </div>
            
        </div>
    );
};

export default Navbar;