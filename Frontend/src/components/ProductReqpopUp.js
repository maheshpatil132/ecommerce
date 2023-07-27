import React, { useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { toast } from "react-toastify";
import { Axios } from "./Axios";

export default function ProductReqpopUp({setShowModal}) {

  const [name, setName] = useState('')
  const [substance, setSubstance] = useState('')
  const [casno, setCasNo] = useState('')
  const [purity, setPurity] = useState('')
  const [color, setColor] = useState('')
  const [Apperance, setApperance] = useState('')
  const [desc, setDesc] = useState('')
  const [Synonyms, setSynonyms] = useState('')
  const [category, setCategory] = useState('')
  const [ecno, setEcno] = useState('')

  const name_handle = (e) => {
    setName(e.target.value)
  }
  const substance_handle = (e) => {
    setSubstance(e.target.value)
  }
  const color_handle  = (e) => {
    setColor(e.target.value)
  }
  const purity_handle = (e) => {
    setPurity(e.target.value)
  }
  const Apperance_handle = (e) => {
    setApperance(e.target.value)
  }
  const desc_handle = (e) => {
    setDesc(e.target.value)
  }
  const category_handle = (e) => {
    setCategory(e.target.value)
  }

  const casno_handle = (e) => {
    setCasNo(e.target.value)
  }
  const ecno_handle = (e) => {
    setEcno(e.target.value)
  }
  const synonyms_handle = (e) => {
    setSynonyms(e.target.value)
  }

  const submit_form = async(e)=>{
    console.log("bbsadkjksa")
    e.preventDefault();
   
     await Axios.put('/request/new/product',{
      productName:name,
      Substance:substance,
      CASNo:casno,
      ECNumber:ecno,
      MinPurity:purity,
      Color:color,
      Apperance:Apperance,
      Category:category,
      Synonyms:Synonyms,
      Proddecr:desc
    }).then((res)=>{
      toast.success(res.data.message)
      setShowModal('added')
      setName('')
      setCategory('')
      setPurity('')
      setEcno('')
      setCasNo('')
      setColor('')
      setDesc('')
      setSynonyms('')
      setApperance('')
      
    }).catch((error)=>{
      console.log(error.response.data.error)
      toast.error(error.response.data.error)
    })
  
  
  }
   


  return (
    <div className="">
      <form onSubmit={submit_form} className=" m-auto border  mx-auto bg-[#E3E9EF] p-3  overflow-y-auto ">
        <div className="flex border ">
       
            <h1 className="font-[400] text-[24px] p-2 flex-1 ">
              Product Details{" "}
            </h1>
            <div className="   ">
            <ClearIcon className=" cursor-pointer" onClick={()=>setShowModal(false)} />
            </div>
        
        </div>

        <div className="flex gap-3 p-2">
         <DriveFolderUploadIcon/>
          <div className="flex gap-1 justify-center flex-col ">
            <p className="text-[#0377EB] text-[16px] font-[600]">
              Upload Product Image
            </p>
            <p className="text-[#757575] text-[11px] font-[400]">
              Should not be more than 1080x1080px
            </p>
          </div>
        </div>
        <div className="flex  gap-3 flex-col mt-4">
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                Product Name
              </p>
              <input
                type="text"
                value={name}
                onChange={name_handle}
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Substance</p>
              <input
                type="text"
                value={substance}
                onChange={substance_handle}
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter Substance Name"
              />
            </div>
          </div>
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                CAS Number
              </p>
              <input
                type="text"
                value={casno}
                onChange={casno_handle}
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the CAS Category  "
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                EC Number{" "}
              </p>
              <input
                type="text"
                value={ecno}
                onChange={ecno_handle}
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the EC Number "
              />
            </div>
          </div>
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                Min Purity
              </p>
              <input
                type="text"
                value={purity}
                onChange={purity_handle}
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Min Purity "
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Color</p>
              <input
                type="text"
                value={color}
                onChange={color_handle}
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Color "
              />
            </div>
          </div>
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Apperance</p>
              <input
                type="text"
                value={Apperance}
                onChange={Apperance_handle}
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Apperance Details"
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Category</p>
              <input
                type="text"
                value={category}
                onChange={category_handle}
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Category"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2">
          <p>Product Description</p>
          <textarea
            value={desc}
            onChange={desc_handle}
            name=""
            id=""
            cols="10"
            rows="5"
            className=" p-2 rounded-md"
            placeholder="Enter the Product Description "
          ></textarea>
        </div>
        <div className="flex flex-col p-2 gap-2">
          <p>Product Synonyms</p>
          <textarea
            value={Synonyms}
            onChange={synonyms_handle}
            name=""
            id=""
            cols="10"
            rows="5"
            className="rounded-md p-2"
            placeholder="Let us know more about your company  "
          ></textarea>
        </div>
        <div className="flex flex-col gap-3 mt-3 p-2">
          <p className="text-[16px] font-[400]">Upload Relevent Document</p>
          <div className="bg-[#DEEFFF] flex gap-3  w-fit p-3">
            <UploadFileIcon/>
            <p className="text-[#1672DE] text-[16px ] font-[400]">
              Upload Document
            </p>
          </div>
        </div>
        <button  type="submit" className="font-[600] text-[16px] bg-[#1672DE] text-[#ffff] px-3 py-2 mt-3 ml-2 ">
        Send Request</button>
      </form>
    </div>
  );
}