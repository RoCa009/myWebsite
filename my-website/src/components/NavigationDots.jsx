import React from 'react'

const NavigationDots = ( {active}) => {
  return (
    <div>
        <div className='app_navigation'>
          {['home', 'about', 'contact', 'work', 'skills', 'contact'].map((item, index)=>(
             <a 
                href={`#${item}`}
                key={item + index}
                className='app__navigation-dot'
                style={active === item ? {backgroundColor: '#313BAC'} : {}}
                >
            </a>
         ))}
        </div>
    </div>
  )
}

export default NavigationDots