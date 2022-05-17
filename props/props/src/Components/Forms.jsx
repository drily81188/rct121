import { useState } from "react"
import "./Form.css"
import { Remove } from "./Remove"


export const Forms = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",

    }) 
    const [list , setList] = useState([])
    const handle = (names) => {
        // id == value hai toh output bta rha hai
        
        
        setForm({ ...form, [names.target.id]:names.target.value})


    }
    const total = () => {
        
        setList([...list, form])
        console.log(list)
        
    }
    
    return <div >
        
        <input onChange={handle}   id="name" type="text" placeholder="enter your Name" />
        <input onChange={handle}  id = "number" type="number" placeholder="Enter your number" />
        <input onChange={handle}  id = "email" type = "text" placeholder="Enter your Email" />
        <button
            onClick={total}
        >ADD</button>
        {
            list.map((e) => {
                return <Remove props = {e} />
            })
        }
    </div>
}