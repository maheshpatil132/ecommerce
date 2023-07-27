import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import Form from './Buyer/Create/Form'
import { Axios } from './Axios'
import CloseIcon from '@mui/icons-material/Close';
import create from  '../images/create.png'
import { AiOutlineEye } from 'react-icons/ai'


const Create = ({setCreateOpen , setOpen}) => {

	const [email, setEmail] = useState('')
	const [number, setNumber] = useState('')
	const [password, setPassword] = useState('')
    const [type_pass, setType_pass] = useState(true)
    const [phone, setPhone] = useState('')



	const handle_email = (e) => {
		setEmail(e.target.value)
	}

	const handle_phone = (e) => {
		setPhone(e.target.value)
	}
	const number_handle = (e) => {
		setNumber(e.target.value)
	}
	const handle_pass = (e) => {
		setPassword(e.target.value)
	}
	const set_pass_type = () => {
        setType_pass(!type_pass)
    }

	const submit_form = async (e) => {
		e.preventDefault();
		await Axios.post('/new/buyer', {
			email: email,
			password: password,
			mobile: number
		})
	}


	useEffect(() => {



	}, [])


	return (
		<section>
			{/* <Form/> */}
		
		    <div className=' flex bg-white p-6 px-10 items-center justify-between gap-6 relative text-black'>

           <div className=' text-center p-3'>
             <h1 className=' text-[#04395E] font-semibold text-3xl'>Welcome back!</h1>
             <p className=' text-[#637D94] text-base'>Enter your account details below or <span className=' cursor-pointer' onClick={()=>{ setCreateOpen(false); setOpen(true) }}>log in </span> </p>
             <img src={create} alt="" />
           </div>

    
    <CloseIcon onClick={()=>setCreateOpen(false)} className=' cursor-pointer absolute right-5 top-5'/>

         
           <form action="" className=' p-3 w-[360px]'>
                
               
                <div className="input_cover my-5 space-y-2">
                    <h3 className='text-sm text-code-text-color'>Email</h3>
                    <input value={email} required onChange={handle_email} type="email" className=' outline-none p-2 w-full border rounded border-code-primary' />
                </div>

				<div className="input_cover my-5 space-y-2">
                    <h3 className='text-sm text-code-text-color'>Phone Number</h3>
                    <input value={phone} required onChange={handle_phone} type="email" className=' outline-none p-2 w-full border rounded border-code-primary' />
                </div>


                <div className="input_cover my-5 space-y-2">
                    <h3 className='text-sm text-code-text-color'>Password</h3>
                    <div className=' p-2 flex gap-2 justify-between items-center w-full border rounded border-code-primary'>
                        <input required value={password} onChange={handle_pass} type={type_pass ? 'password' : 'text'} className=' flex-1 outline-none' />
                        <AiOutlineEye onClick={set_pass_type} cursor={'pointer'} size={20} color={type_pass ? '#667080' : '#00A99D'} />
                    </div>
                </div>
                <button onClick={submit_form} type='submit' className='my-5 bg-code-primary text-white p-4 w-full rounded-md font-bold text-base'>Proceed</button>
                <span className=' font-bold text-[#004E97] block text-center'><a href="/" className='underline'>Forgot Password</a></span>
            </form>

          

        </div>
			
		</section>
	)
}

export default Create