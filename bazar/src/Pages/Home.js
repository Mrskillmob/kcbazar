import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import mys from '../images/mys.jpg'
import { useEffect , useState } from 'react'
import axios from "axios"

function Home() {
  
  const [url, setUrl] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const getData = () => {
      axios.get("https://bazar-backend-production.up.railway.app/api/getallitems")
        .then((response) => {
          setUrl(response.data)
          console.log(response.data) 
        })
    }
    getData();
  }, []);

  const renderItems = () => {
    const filteredItems = url.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.price >= priceFilter
    );
    
    const sortedItems = sortOrder === 'asc'
      ? filteredItems.sort((a, b) => a.price - b.price)
      : filteredItems.sort((a, b) => b.price - a.price);
      
    return sortedItems.map((item) => (
      <Link to={"/kcbazar/item/" + item.id} className="flex flex-col bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
        <img className="w-full h-64 object-cover rounded-t-lg" src={item.url} alt={item.title} />
        <div className="p-4 bg-sivaprodukt">
          <h2 className="text-lg text-font-bold  text-purple">{item.title}</h2>
          <p className="text-biela mt-2 text-font-bold">{item.price} €</p>
        </div>
      </Link>
    ));
  } 

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-dark-primary">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <input
              type="text"
              placeholder="Hľadať podľa názvu"
              className="w-full bg-white rounded-full px-4 py-2 border-2 border-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
          </div>
          <div className="flex justify-end mb-4">
            <button onClick={handleSort} className="text-white bg-purple py-2 px-4 rounded-lg">
              Zoradiť podľa ceny {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
          <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
            {renderItems()}         
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
