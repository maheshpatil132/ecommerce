import React, { useEffect, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { loginbuyeraction, loginselleraction, loginadminaction } from '../../../actions/BuyerActions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom'
import login from '../../../images/login.png'
import CloseIcon from '@mui/icons-material/Close';

const Login = ({setOpen , setCreateOpen}) => {

    // state variables
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type_pass, setType_pass] = useState(true)

    // other variable and states
    const dispatch = useDispatch()
    const { error, isAuthenticated } = useSelector(state => state.user)
    const navigate = useNavigate()
    const location = useLocation()
    // functions
    const handle_email = (e) => {
        setEmail(e.target.value)
    }
    const handle_pass = (e) => {
        setPassword(e.target.value)
    }
    const set_pass_type = () => {
        setType_pass(!type_pass)
    }
    const submit_form = (e) => {
        e.preventDefault()
        if (byer) {
            if (email === "admin@maqure.com") {
                dispatch(loginadminaction(email, password , setOpen)).then(() => {
                    navigate('/dashboard')
                }).catch((error) => {
                    setOpen(true)
                    console.log(error);
                })
            } else {
                dispatch(loginbuyeraction(email, password ,setOpen)).then(() => {
                    navigate('/dashboard')
                }).catch((error) => {
                    setOpen(true)

                    console.log(error);
                })

            }
        }
        else {
            dispatch(loginselleraction(email, password , setOpen)).then(() => {
                navigate('/dashboard')
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const [byer, setByer] = useState(true)

    const select_seller = (e) => {
        e.preventDefault();
        setByer(false)
    }
    const select_byer = (e) => {
        e.preventDefault();
        setByer(true)
    }


    return (
        <div className=' flex bg-white p-6 px-10 items-center justify-between gap-6 relative text-black'>

           <div className=' text-center p-3'>
             <h1 className=' text-[#04395E] font-semibold text-3xl'>Welcome back!</h1>
             <p className=' text-[#637D94] text-base'>Login below or <span className=' cursor-pointer' onClick={()=>{ setCreateOpen(true); setOpen(false) }}> Create an Account</span>  </p>
             <img src={login} alt="" />
           </div>

    
    <CloseIcon onClick={()=>setOpen(false)} className=' cursor-pointer absolute right-5 top-5'/>

         
           <form action="" className=' p-3 w-[360px]'>
                
                <div>
                    <div className="buttons flex gap-4 my-4 mb-8">
                        <button onClick={select_byer} className={`flex-1    p-3 capitalize ${byer ? 'border-code-primary border-b-2 font-bold text-[#004AA1]' : 'border-gray-300 border-b text-code-text-color'}`}>as a buyer</button>
                        <button onClick={select_seller} className={`p-3 capitalize  flex-1  ${!byer ? 'border-code-primary border-b-2 font-bold text-[#004AA1]' : 'border-gray-300 border-b text-code-text-color'}`} >as a seller</button>
                    </div>
                </div>
                <div className="input_cover my-5 space-y-2">
                    <h3 className='text-sm text-code-text-color'>Email</h3>
                    <input value={email} required onChange={handle_email} type="email" className=' outline-none p-2 w-full border rounded border-code-primary' />
                </div>
                <div className="input_cover my-5 space-y-2">
                    <h3 className='text-sm text-code-text-color'>Password</h3>
                    <div className=' p-2 flex gap-2 justify-between items-center w-full border rounded border-code-primary'>
                        <input required value={password} onChange={handle_pass} type={type_pass ? 'password' : 'text'} className=' flex-1 outline-none' />
                        <AiOutlineEye onClick={set_pass_type} cursor={'pointer'} size={20} color={type_pass ? '#667080' : '#00A99D'} />
                    </div>
                </div>
                <button onClick={submit_form} type='submit' className='my-5 bg-code-primary text-white p-4 w-full rounded-md font-bold text-base'>Login</button>
                <span className=' font-bold text-[#004E97] block text-center'><a href="/" className='underline'>Forgot Password</a></span>
            </form>

          

        </div>
    )
}

export default Login