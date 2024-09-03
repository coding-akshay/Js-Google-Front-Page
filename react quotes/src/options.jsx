import { useEffect, useState } from "react"

function Options(){
    const [content,setContent]=useState('')
    // const [q,setQ]=useEffect()

    function akshay(input){
        setContent(input.target.value)
        let method = Quotes.filter(qoute=>qoute.author=="Confucius")
          
    }
return(
    <>
    <h1>{content}</h1>
    <select name="" id="" onChange={akshay}>
        <option value="" >select</option>
        <option value="Winston Churchill">winston</option>
        <option value="franklin D. Roosevelt">franklin</option>
        <option value="Martin Luther King Jr">martin</option>
        <option value="confucius">confucius</option>
        <option value="Nelson Mandela">nelson</option>
    </select>
    </>
)
}
export default Options