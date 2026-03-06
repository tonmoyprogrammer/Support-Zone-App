import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/NavBar/Navbar'
import Customers from './Component/Customers/Customers'
import { Suspense } from 'react'
import Footer from './Component/Footer/Footer'

const fetchData = async () => {
  const getData = await fetch("./customer.json")
  return getData.json();
}
function App() {

  const getFetchData = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <section className='bg-[#62738210]'>
        <div className='max-w-11/12 mx-auto flex justify-between gap-5'>

          <div className="w-[75%]">
            <p className="font-semibold text-3xl text-gray-600">Customer Tickets</p>

            <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
              <Customers customers={getFetchData}></Customers>
            </Suspense>

          </div>

          <div className="w-[25%]">
            <p className="font-semibold text-3xl text-gray-600">Task Status</p>
          </div>


        </div>
      </section>
      <Footer></Footer>


    </>
  )
}

export default App;
