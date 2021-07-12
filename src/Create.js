import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("manish");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      setIsPending(true);
      const blog = {  title ,body,author  };
     fetch('http://localhost:8000/blogs',{
         method:'POST',
         headers : {
             "content-type" :  "application/json"
         },
         body : JSON.stringify(blog)
     }).then((res) => {
         console.log('new blog added');
         setIsPending(false)
     })
  }

  return (
    <div className="create">
      <h1>Add a new Blog</h1>
      <form onSubmit= {handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog title:</label>
        <textarea
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="manish">Manish</option>
          <option value="Steve">Steve</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
