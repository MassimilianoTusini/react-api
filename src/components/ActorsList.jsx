import {useState, useEffect} from "react"
import ActorCard from "./ActorCard"

export default function ActorsList() {
    const [actors, setActors] = useState ([]);

    function fetchActors() {
        window.axios.get("https://lanciweb.github.io/demo/api/actresses/")
        .then((res) =>  {
            console.log(res.data)
            setActors(res.data)            
        })
        .catch(error => console.log(error))
    }
 
    useEffect(() =>{
        fetchActors()  
    }, [])

    return(
        <>
        <div className="container">
              <div className="actors">
                 {actors.map((actor) => (
                     <ActorCard
                        key={actor.id}
                        actor={actor}
                     />
                 ))}
             </div>
         </div> 
        </>
    )
}