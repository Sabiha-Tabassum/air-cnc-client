import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routes'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <Toaster></Toaster>
        <RouterProvider router={router} />
    </AuthProvider>


)
