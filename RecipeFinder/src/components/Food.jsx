import React, { useState } from 'react'
import MealCard from './MealCard'
 import './food.css'


const Food = () => {
    const [data , setData] = useState([])
    const [search , setSearch] = useState()
       
    const myFunc = async () =>{
     const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
     const jsonData = await get.json()
     setData(jsonData.meals)
    }
    console.log(data)

    const handleInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
       <h1 className='heading'>FOOD RECIPE APP</h1>
       <div className="search">
        <input type="text" placeholder='Search Meals' name="" id="" onChange={handleInput} />
        <button className='btn' onClick={myFunc}>Search</button>
     </div>
         
         <h2>Your Search Result's</h2>

         <div>
            <MealCard  details={data}/>
         </div>
    </div>
  )
}

export default Food