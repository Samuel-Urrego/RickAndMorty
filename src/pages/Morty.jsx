import React from 'react'
import mortyImage from '../images/morty.png'

const Morty = () => {
  return (
    <>
      <section className='Title'>
        <h1 className='Title-morty'>Morty Smith</h1>
        <img src={mortyImage} alt="Morty Sanchez" className='morty-image' />
      </section>
      <section className='Text-morty'>
        <p>Morty Smith es el nieto del genio alcohólico Rick Sánchez y coprotagonista de la serie Rick and Morty. A simple vista, es un adolescente común: inseguro, nervioso, con una autoestima frágil y problemas típicos de su edad. Sin embargo, bajo esa fachada se esconde un joven resiliente que ha vivido más experiencias intergalácticas y dilemas existenciales que cualquier adulto promedio.</p>
      </section>
    </>
  )
}

export default Morty