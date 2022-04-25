import axios from 'axios';
import './apiCall.css';


/*

    Boiler plate code for connecting to an API. 
    Boiler plate includes both the handleClick function as well as the button format due to use of wrappers. 
    Pings API and returns desired result

    
    Uses anymous function structure. Specify input inside the handle click portion. 


            <button onClick={()=> {
                    handleClick(input);  -> handleClick wrapped inside anymous function. 
            }}>Call Api</button>

    
    To traverse the array structure of JSON use response.data.(subgroup)[index].(subgroup)etc etc

*/
function ApiCall(){
    const handleClick=(input)=> {
        axios.get("https://www.dnd5eapi.co/api"+input)
        
        .then(response => {
            console.log(response.data.proficiencies[0].url);
    
        })
        
        .catch(err=>{

            console.log(err);
        });

    }
    return(

            <div>apiCallSite
                <button onClick={()=> {
                    handleClick("/classes/barbarian");
                }}>Call Api</button>
            </div>
    );
}

export default ApiCall;
