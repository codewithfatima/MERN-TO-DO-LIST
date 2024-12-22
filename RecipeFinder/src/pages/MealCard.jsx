import React from 'react'
import { NavLink } from 'react-router-dom'
import './food.css'

const MealCard = ({ details }) => {
  console.log(details)

  return (
    <div className='box'>
      {!details ? "" : details.map((curItem) => {
        return (
          <div >
            <img src={ curItem.strMealThumb} alt="" />
            <p>{curItem.strMeal}</p>
            <NavLink to={`/${curItem.idMeal}`}> <button className='btn'>Recipe</button></NavLink>
          </div>

        )
      })
      }
    </div>
  )
}

export default MealCard