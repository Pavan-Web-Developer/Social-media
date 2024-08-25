// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Login from './Login'

// const ProtectedRoute = ({ isAuthenticated, component }) => {
//     return (
//         <div>
//             <Routes>
//                 {isAuthenticated ?
//                     <Route element={component} /> : <Route element={<Login />} />}
//             </Routes>
//         </div>
//     )
// }

// export default ProtectedRoute
import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children, component }) => {
    const isAuthenticated = useSelector((state) => state.user);
    let location = useLocation();
    console.log(component)

    if (!isAuthenticated) {
        return (
            <div className='content'>
                <Navigate to="/login" state={{ from: location }} replace />
            </div>)
    }
    return children

};

export default ProtectedRoute;