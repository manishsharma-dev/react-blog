const Home = () => {
    const handleClick = (e) => {
        console.log("hello, all", e);
    }

    const handleClickAgain = (name,e) => {
        alert("hello" + name);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>click me</button>
            <button onClick={(e) => handleClickAgain('Manish',e)}>click me again</button>
        </div>
     );
}
 
export default Home;