import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
      <div className='banner'>
        <h1>{title}</h1>
        <p>Zfhghgh hjghg dfs uikjk dscv hghgh hjghg dfs uikjkhghgh hjghg
           dfshghgh hjghg dfs
           uikjk dscv rere ljkl fvdfdf dfsdsd thg rer uyu dsd uikjk dscv
            rere ljkl fvdfdf dfsdsd thg rer uyu dsd dscv rere ljkl fvdfdf 
            dfsdsd thg rer uyu dsdrere ljkl fvdfdf dfsdsd thg rer uyu dsd
            </p>
            </div>
          <div className='banner'>
        <img src = {imageUrl} alt="hero" className='animated-image'/>
        <span>
          <img src={imageUrl} alt="dance"/>
        </span>
              
     </div>
    </div>
  )
}

export default Hero