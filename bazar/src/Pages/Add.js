import { Link } from 'react-router-dom'
import { React, useState, useEffect } from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';
import plus from '../images/plus.jpg'

const config = {
  headers: { 'content-type': 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p' }
};

const config2 = {
  headers: { 'Content-Type': 'multipart/form-data' }
};

function Add() {
  const [title, setTitle]=useState("")
  const [description, setDescription]=useState("")
  const [phonenumber, setPhonenumber]=useState("")
  const [price, setPrice]=useState("")
  const [autorname, setAutorname]=useState("")
  const [location, setLocation]=useState("")
  const [url, setUrl]=useState("")


  function uploadFile() {

    const file0 = document.querySelector('input[id="fileinput"]').files[0];
    let data = new FormData();
    data.append("file0",file0);
    axios.post("http://localhost:8080/api/files/uploadFile", data, config).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        let data2 = new FormData();
        data2.append("title",title);
        data2.append("price",price);
        data2.append("description",description);
        data2.append("phonenumber",phonenumber);
        data2.append("location",location);
        data2.append("autorname",autorname);
        data2.append("url",res.data);
        axios.post("http://localhost:8080/api/uploadItem", data2, config2);

      }
    });
  } 

  return (
    <div className="grid grid-rows-main h-full w-full">
      <Navbar />
      <div className="w-full bg-dark-primary h-screen flex flex-row items-center justify-center overflow-x-hidden">
        <div className="w-full h-full grid grid-cols-2 grid-rows-1 ">
          <img src={plus} className="ml-auto my-auto hidden md:block"/>
          <div className="m-auto p-10 pr-32">

            <h1 className="text-white font-bold text-4xl mb-4">Nahraj položku</h1>
            
            <p className="text-white"> Obrázok:</p>
            <input className="p-1" type="file" id="fileinput"></input>

            <p className="text-white"> Názov:</p>
            <input className="p-1 bg-lime-200"  onChange={(event)=>{setTitle(event.target.value)}} type="text" ></input>

            <p className="text-white"> Popis:</p>
            <textarea rows="4" className="w-48 p-1 bg-lime-200" onChange={(event)=>{setDescription(event.target.value)}} type="text" ></textarea>
            
            <p className="text-white" > Telefónne číslo:</p>
            <input className="p-1 bg-lime-200" onChange={(event)=>{setPhonenumber(event.target.value)}}  type="text" ></input>

            <p className="text-white" > Lokácia:</p>
            <input className="p-1 bg-lime-200" onChange={(event)=>{setLocation(event.target.value)}}  type="text" ></input>

            <p className="text-white" > Cena:</p>
            <input className="p-1 bg-lime-200"  onChange={(event)=>{setPrice(event.target.value)}}  type="text" ></input>

            <p className="text-white" > Autor:</p>
            <input className="p-1 bg-lime-200"  onChange={(event)=>{setAutorname(event.target.value)}}  type="text" ></input>

             


          <div className="mt-10">
            
              <Link to="/Success"><button type="button" onClick={uploadFile} className="text-white text-3xl bg-red-600 p-3 rounder-xl font-bold">PREDAJ!</button>  </Link>
          </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Add