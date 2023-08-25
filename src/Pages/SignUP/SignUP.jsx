import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'
import { TbFidgetSpinner } from 'react-icons/tb'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { saveUser } from '../../api/auth'

const SignUp = () => {
  const {loading, setLoading, signInWithGoogle, createUser, updateUserProfile,
  } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  // handle user registration
  const handleSubmit = event => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    // Image Upload
    const image = event.target.image.files[0]
    // console.log(image);
    const formData = new FormData()
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`
    
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const imageUrl = imageData.data.display_url
        // console.log(imageUrl)
        createUser(email, password)
          .then(result => {
            
            console.log(result.user)
            updateUserProfile(name, imageUrl)
              .then(() => {
                saveUser(result.user)
                toast.success('Signup successful')
                navigate(from, { replace: true })
              })
              .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
              })
          })
          .catch(err => {
            setLoading(false)
            console.log(err.message)
            toast.error(err.message)
          })
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })

    return
  }

  // handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        saveUser(result.user)
        console.log(result.user)
        navigate(from, { replace: true })
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to AirCNC</p>
        </div>
        <form
          onSubmit={handleSubmit} className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label className='block mb-2 text-sm'>
                Name
              </label>
              <input  type='text' name='name' placeholder='Enter Your Name Here'
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>

            <div>
              <label className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input required type='file' name='image' accept='image/*' />
            </div>

            <div>
              <label className='block mb-2 text-sm'>
                Email address
              </label>
              <input  type='email'  name='email' required placeholder='Enter Your Email Here' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                
              />
            </div>


            <div>
              <div className='flex justify-between'>
                <label className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input  type='password' name='password' required placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button type='submit' className='bg-rose-500 w-full rounded-md py-3 text-white'>
              {loading ? (
                <TbFidgetSpinner className='m-auto animate-spin' size={24} />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 '>
          
          <p className='px-20 text-sm dark:text-gray-400'>
           Signup with social accounts
          </p>
          <div className=''></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?
          <Link to='/login' className='hover:underline hover:text-rose-500 text-gray-600'>
            Login
          </Link>
          
        </p>
      </div>
    </div>
  )
}

export default SignUp