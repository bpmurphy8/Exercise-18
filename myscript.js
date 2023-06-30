let {useState} = React;
let MyCounter = () => {

    let [counter,setCounter] = useState(27) ; 


    
    let clickHandler = () => {
        counter++;
        setCounter(counter);
        console.log(counter)
    }

    
    return(
        <div>
            <button onClick={clickHandler}>
            Click Me! </button>
            <p> {counter} </p><br/>
            
        </div>
    );
}

let root = ReactDOM.createRoot(document.getElementById("mydiv"));
root.render(<MyCounter/>);