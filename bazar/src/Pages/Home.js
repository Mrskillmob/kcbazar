
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import mys from '../images/mys.jpg'
import { useEffect , useState } from 'react'
import axios from "axios"
function Home() {
  
  const [url, setUrl] = useState([])

  useEffect(() => {
    const getData = ()=>{
     
    axios.get("https://bazar-backend-production.up.railway.app/api/getallitems").then((response) => {
     setUrl(response.data)
    console.log(response.data) 
    })
    
    




  }
    getData();
  }, []);


   const render = ()=> {
     var renderItems = []
     renderItems = url.map((item) => {
       console.log(item)
      return(
        <Link to={"/item/" + item.id} className="h-full w-full flex flex-col">
            <img className="w-full aspect-[16/9] bg-black object-contain" src={item.url}/>
            <h1 className="text-white text-2xl mt-2 font-bold">{item.price + " €"}</h1>
        </Link>
      )
     })
     console.log(renderItems)
     return renderItems
   } 
  
 
    
  
  return (
    <div className="grid grid-rows-main h-full w-full">
      <Navbar />
      <div className="w-full bg-dark-primary h-full flex flex-row">
        <div className="grid grid-rows-4 p-16 gap-10 w-full h-full grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4">
          {render()}         
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
