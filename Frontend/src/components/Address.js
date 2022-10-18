import React, { Profiler } from 'react'
import { useState } from 'react';
import '../index.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AlterProfile from './AlterProfile';

const Address = ({ setShowModal, user }) => {
    const [profile, setProfile] = useState(user && user.profileAddress)
    console.log(user)

    return (
        <>
            <div className="mt-4">
                <div className="flex flex-col overflow-y-scroll h-[240px]">
                    <button onClick={() => { setShowModal('address') }} className='text-white bg-[#004AA1] px-3 py-2 text-lg font-medium rounded-md w-fit'><AddCircleOutlineIcon className='mr-1 mb-1' fontSize='small' />Address</button>

                    {
                        profile && profile.length !== 0 ?
                            profile.map((e) => {
                                return (
                                    <div className="mt-3 rounded-md box_shadow bg-white border p-3 box_shadow">
                                        <div className="flex justify-between">
                                            <h1>Address</h1>
                                            <button onClick={() => { setShowModal('address') }} className='text-white bg-[#004AA1] px-2 py-1 rounded-md '><BorderColorIcon className='mb-1' fontSize='small' /><span className='mx-2'>Edit</span></button>
                                        </div>

                                        <div className="flex w-11/12 mt-3 p-1">
                                            <div className="flex flex-col w-1/4">
                                                <p className="text-[#637F94] text-sm font-medium">Address Type </p>
                                                <p>{e.type}</p>
                                            </div>
                                            <div className="flex flex-col w-1/4">
                                                <p className="text-[#637F94] text-sm font-medium">Contact Person Name</p>
                                                <p>{e.name}</p>
                                            </div>
                                            <div className="flex flex-col w-1/4">
                                                <p className="text-[#637F94] text-sm font-medium">Mobile Number</p>
                                                <p>{e.mobile}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col p-1 mt-2">
                                            <p className="text-[#637F94] text-sm font-medium w-1/2">Address</p>
                                            <p>{e.address} </p>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <AlterProfile />
                    }
                </div>

            </div>
        </>

    )
}

export default Address