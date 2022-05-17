import {useState} from 'react'

export const Remove = ({ props }) => {
    const [del , setDel] = useState (false)
  return (
      <div
          onClick={() => {
            setDel(!del)
              
          }
            
              
      }
          
      > {props.name}
          <span>
              { del ? props.email : props.number}
          </span>
      </div>
      
  )
}
