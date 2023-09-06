import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div className="border-2 w-full md:w-auto rounded-full py-2 cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="font-bold px-4">Anywhere</div>
                <div className="hidden sm:block font-bold px-4">Any Week</div>
                <div className="hidden sm:block font-bold px-4">Add Guest</div>
                <div className='px-4'>
                    <div className='p-2 bg-rose-500 text-white rounded-full'><BiSearch></BiSearch></div>
                </div>

            </div>
        </div>
    );
};

export default Search;