import { DateRange } from 'react-date-range'
import { TbFidgetSpinner } from 'react-icons/tb'
import { categories } from '../Category/CategoriesData'

const AddRoomForm = ({ handleSubmit,
    dates,
    handleDates,
    loading = false,
    handleImageChange,
    uploadButtonText,}) => {

    return (
        <div className='w-full  flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='space-y-6'>
              <div className='space-y-1 text-sm'>
                <label  className='block text-gray-600'>
                  Location
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='location' type='text' placeholder='Location' required
                />
              </div>
  
              <div className='space-y-1 text-sm'>
                <label className='block text-gray-600'>
                  Category
                </label>
                <select
                  required
                  className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md' name='category'
                >

                  {categories.map(category => (
                    <option value={category.label} key={category.label}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
  
              <div className='space-y-1'>
                <label  className='block text-gray-600'>
                  Select Availability Range
                </label>
                <DateRange onChange={handleDates} ranges={[dates]}  rangeColors={['#F43F5E']} />
              </div>
            </div>
            <div className='space-y-6'>
              <div className='space-y-1 text-sm'>
                <label  className='block text-gray-600'>
                  Title
                </label>
                <input className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md ' name='title' type='text'
                  placeholder='Title' required
                />
              </div>
  
              <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                  <div className='flex flex-col w-max mx-auto text-center'>
                    <label>
                      <input onChange={event => {
                        handleImageChange(event.target.files[0])
                      }}
                        className='text-sm cursor-pointer w-36 hidden'
                        type='file' name='image' accept='image/*'
                        hidden
                      />
                      <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                        {uploadButtonText}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className='flex justify-between gap-2'>
                <div className='space-y-1 text-sm'>
                  <label  className='block text-gray-600'>
                    Price
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '  name='price' type='number'
                    placeholder='Price' required
                  />
                </div>
  
                <div className='space-y-1 text-sm'>
                  <label  className='block text-gray-600'>
                    Total guest
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md 'name='total_guest' type='number'
                    placeholder='Total guest' required
                  />
                </div>
              </div>
  
              <div className='flex justify-between gap-2'>
                <div className='space-y-1 text-sm'>
                  <label  className='block text-gray-600'>
                    rooms
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md ' name='rooms' type='number'
                    placeholder='rooms'
                    required
                  />
                </div>
  
                
              </div>
  
              <div className='space-y-1 text-sm'>
                <label  className='block text-gray-600'>
                  Description
                </label>
  
                <textarea className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                  name='description'
                >

                </textarea>
              </div>
            </div>
          </div>
  
          <button
            type='submit'
            className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
          >
            {loading ? (
              <TbFidgetSpinner className='m-auto animate-spin' size={24} />
            ) : (
              'Save & Continue'
            )}
          </button>
        </form>
      </div>
    );
};

export default AddRoomForm;