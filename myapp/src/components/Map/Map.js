import { useState } from "react"
import Blog from "../Blog/Blog"
function Map(){
    const [data, setData]= useState(Blog)
    return(
        <>
        {data.map((currentElem)=>{
            return(
                <div>
                {currentElem.id}
                </div>
            )
        })
        }
</>
    )
}
export default Map;