import axios from 'axios';
import './apiCall.css';

function ApiCall(){

    const handleClick=()=> {

        axios.get("https://reqres.in/api/users?page=2").then(response => {
            console.log(response);

        });
        console.log("helloWorld");
    }
    return(

            <div>apiCallSite
                <button onClick={()=> {
                    handleClick();

                }}>Call Api</button>


            </div>
    );
}

export default ApiCall;
