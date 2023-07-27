import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const Protected = ({isAuthenticated , children}) => {
   if(!isAuthenticated){
     return <Navigate  to={'/'}></Navigate>
   }
    
   return  children

}

export default Protected