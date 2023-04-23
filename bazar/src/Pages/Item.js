
import { Link, useParams } from 'react-router-dom'
import { React, useState, useEffect} from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mys from '../images/mys.jpg'
import axios from 'axios'

function Item() {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)
  var { id } = useParams();


  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  };

  useEffect(() => {
    const getData = ()=>{
    console.log(id)
    axios.get("https://bazar-backend-production.up.railway.app/api/getallitems").then((response) => {
     var tempIndex = response.data.findIndex(p => p.id == id);
     setData(response.data[tempIndex])
    console.log(response.data[tempIndex]) 
    })
    
    




  }
    getData();
  }, []);


  function deleteFile() {
    const data3 = {id: data.id}
    axios.get("https://bazar-backend-production.up.railway.app/api/delete?id=" + data.id).then(res => {
      if (res.status === 200) {
        console.log(res.data);
      }
    }); 
  }

  return (
    <div className="grid grid-rows-main h-full w-full">
      <Navbar />
      <div className="w-full bg-dark-primary h-full flex flex-row items-center justify-center">
        <div className="w-full h-full grid grid-cols-2 grid-rows-1 ">
          <img src={data.url} className="ml-auto my-auto w-[500px] h-[500px] object-contain"/>
          <div className="m-auto p-10 pr-32">
            <h1 className="text-white font-bold text-4xl mb-4">{data.title}</h1>
            
            <p className="text-white">Popis: {data.description}</p>
            <h1 className="text-2xl mt-16 font-bold text-white">Cena: {data.price + " €"}</h1>
            <h1 className="text-lg mt-4 font-bold text-white">Autor: {data.autorname}</h1>
            <h1 className="text-lg font-bold text-white">Telefónne číslo: {data.phonenumber}</h1>
            <h1 className="text-lg font-bold text-white">Lokácia: {data.location}</h1>
            {/*<Link to="/kcbazar/success"> <button type="button" onClick={deleteFile} className="main-page__btn">Vymazať</button> </Link>*/}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Item