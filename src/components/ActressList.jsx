import {useState, useEffect} from "react"
import ActressCard from "./ActressCard"

export default function ActressList() {
    const [actresses, setActresses] = useState ([]);

    function fetchActresses() {
        window.axios.get("https://lanciweb.github.io/demo/api/actresses/")
        .then((res) =>  {
            console.log(res.data)
            setActresses(res.data)            
        })
        .catch(error => console.log(error))
    }
 
    useEffect(() =>{
        fetchActresses()  
    }, [])

    return(
        <>
        <div className="container">
              <div className="actors">
                 {actresses.map((actress) => (
                     <ActressCard
                        key={actress.id}
                        actress={actress}
                     />
                 ))}
             </div>
         </div> 
        </>
    )
}