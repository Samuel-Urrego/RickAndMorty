import React from 'react'
import meeseeksImage from '../images/meeseeks2.png'
const Meeseeks = () => {
  return(
    <>
    <section className='Title'>
          <h1 className='Title-meeseeks'>Meeseeks</h1>
          <img src={meeseeksImage} alt="Meeseeks" className='meeseeks-image' />
        </section>
        <section className='Text-meeseeks'>
          <p>Los Mr. Meeseeks son seres artificiales creados por una caja especial llamada la Meeseeks Box. Su propósito es simple: aparecer, cumplir una tarea asignada, y desaparecer. Están diseñados para vivir por poco tiempo, ya que su existencia prolongada causa un sufrimiento intenso.</p>
        </section>
    </>
  )
}

export default Meeseeks