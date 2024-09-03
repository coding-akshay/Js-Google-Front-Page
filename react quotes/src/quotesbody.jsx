import { useState } from 'react'
import Quotes from './items'

function Body() {

    const[value,setValue] = useState(Quotes[0].quote)
    
    const[valu,setValu]=useState(Quotes[0].author)
    
    
function shop(){
    let randomnumber=Math.floor(Math.random()*Quotes.length)
    setValue(Quotes[randomnumber].quote)
    let randomnames=Math.floor(Math.random()*Quotes.length)
    setValu(Quotes[randomnames].author)
    
}
    return (
      <>
      
      <div className='w-[100vw] h-[100vh] flex items-center justify-center flex-col'  >
     
     <div>{value} </div>
     <div>{valu}</div>
     <div className=''><button onClick={shop}>button</button ></div>
        
    
      </div>
    
      </>
    )
  }
  
  export default Body