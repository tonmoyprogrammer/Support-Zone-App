import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/NavBar/Navbar'
import Customers from './Component/Customers/Customers'
import { Suspense, useEffect, useState } from 'react'
import Footer from './Component/Footer/Footer'
import Tasks from './Component/Tasks/Tasks'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [allCustomers,setAllCustomer] = useState([]);
  const [count,setCount] = useState([]);
  const [resolved,setResolved] = useState([]);


  useEffect(()=>
  {
    fetch("./customer.json")
    .then(res=>res.json())
    .then(data=> setAllCustomer(data))

  },[]);
  const handleCount = id=>
  {
    const findCount = count.find(item => item.id == id.id)
    if(!findCount)
    {
      setCount([...count,id])
    }
  }
  const resolvedTask = (id)=>
  {
   
    const checkCount = count.filter(task=>task.id !== id)
    setCount(checkCount)
    const solved = [...resolved,id]
    setResolved(solved)
    toast("Tasks are resolving.............")

    const allId = allCustomers.filter(cart => cart.id !== id)
   setAllCustomer(allId)
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner count={count} resolved={resolved}></Banner>
      <section className='bg-[#62738210]'>
        <div className='max-w-11/12 mx-auto flex flex-col md:flex-row  justify-between gap-5
       '>

          <div className="w-[75%]  ">
            <p className="font-semibold text- 3xl text-gray-600 text-center md:text-left">Customer Tickets</p>

            <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
              <Customers customers={allCustomers} handleCount={handleCount}></Customers>
            </Suspense>

          </div>

          <div className="w-[25%] ">
            <p className="font-semibold text-3xl text-gray-600 text-center md:text-left">Task Status</p>
         <div className="mt-5">
             {
              count.length === 0 && <p className='text-gray-400'>Select a ticket to add to Task Status</p>
             }
              <Tasks count={count} resolvedTask={resolvedTask}></Tasks>
         </div>
          </div>


        </div>
      </section>
      <Footer></Footer>
             <ToastContainer></ToastContainer>

    </>
  )
}

export default App;
