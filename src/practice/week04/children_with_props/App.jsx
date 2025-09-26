import "./App.css"
import Parent from "./Parent";

function App(){
    return (
        // <div className = "parent">
        //     <div className = "child"></div>
        //     <div className = "child"></div>
        //     <div className = "child"></div>
        //     <div className = "child"></div>
        // </div>
        <Parent>
            <div className = "child"></div>
            <div className = "child"></div>
            <div className = "child"></div>
            <div className = "child"></div>
        </Parent>
    )
}

export default App;