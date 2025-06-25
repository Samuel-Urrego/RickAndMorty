import React from 'react'
import rickImage from '../images/rick.webp'
const Rick = () => {
  return (
    <>
    <section className='Title'>
      <h1 className='Title-rick'>Rick Sanchez</h1>
      <img src={rickImage} alt="Rick Sanchez" className='rick-image' />
    </section>
    <section className='Text-rick'>
      <p>Rick Sánchez no es solo un científico: es el científico. Un genio absoluto con un intelecto tan avanzado que ha creado tecnología que desafía las leyes de la física, ha destruido gobiernos interplanetarios y ha burlado a las autoridades de múltiples dimensiones. Rick es cínico, narcisista, alcohólico, y posiblemente uno de los seres más peligrosos que existen… y lo sabe.

Aun así, bajo su capa de sarcasmo y arrogancia, se esconde una figura mucho más compleja y, en ocasiones, trágica.</p>
    </section>
  </>
  )
}

export default Rick