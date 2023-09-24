

import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './compunent/coffeeCard'


function App() {
  // const [count, setCount] = useState(0)


  const coffees = useLoaderData()
  console.log
  return (
    <>

      <div className='mt-10 container mx-auto'>
        <h1 className='text-6xl text-purple-600 text-center'>Hot col coffee: {coffees.length}</h1>

        <Link to='addCoffee'>  <button className='btn '>Add Coffee</button></Link>
        <Link to='updateCoffee'>  <button className='btn '>updateCoffee</button></Link>
        <div className='grid md:grid-cols-2 gap-4 mt-20'>
          {
            coffees.map(coffee => <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>)
          }
        </div>
      </div>


    </>
  )
}

export default App
