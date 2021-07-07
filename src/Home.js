import { useState } from "react";

const Home = () => {
    
    const [name,setName] = useState('mario');
    const [age,setAge] = useState('27');
    const handleClick = () => {
       setName('Sean');
       setAge('30');
    }

   

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>click me</button>            
        </div>
     );
}
 
export default Home;