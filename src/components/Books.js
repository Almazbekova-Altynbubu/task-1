import Data from "./Data";
import './Books.css'

function Books(props){
    console.log(props);
    
    

    return(
        <div className="books">
            <h1 >{props.bookName}</h1>
            <h1>{props.price}</h1>
            {/* <h3>{props.data}</h3> */}

            <Data data={props.data}/> 
        </div>
    )
}
export default Books