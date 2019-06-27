import React, {useState, useEffect} from "react";

export function ToDoById() {
    const [query, setQuery] = useState("1");
    const [toDo, setTodo] = useState({});
    const [id, setId] = useState("1");
    const [loading, setLoading] = useState(true);
    useEffect(fetchData, [id]);

    function fetchData() {

        async function fetchToDos() {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos/' + id).then(res => res.json());
            setLoading(false);
            setTodo(data);
        };
        fetchToDos();
    }


    function handleChange(value) {
        setQuery(value);
    }

    function handleButtonClick() {
        setId(query);
        setLoading(true);
    }


    return(
        <>
            <input type = "text" onChange = {(evt) => handleChange(evt.target.value)}/>
            <button onClick = {handleButtonClick} >Search</button>
            {loading && <p>Loading ...</p>}
            {!loading && <p>{toDo.title}</p>}
        </>
    );
}