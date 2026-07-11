import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className='banner'>
        <img src={imageUrl} alt="aboutImg"/>
        </div>
        <div className='banner'>
          <p>Biography</p>
          <h3>Who we are</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, reiciendis quos?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi officia, nesciunt quos voluptatibus voluptate laboriosam facere doloremque quae quas tenetur odit velit at, quaerat minima rerum exercitationem sit porro aliquam consequuntur quod harum minus.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic in fuga?</p>
      <p>Lorem, ipsum3</p>
      </div>
    </div>
  )
}

export default Biography
