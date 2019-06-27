import React, {useState, useEffect} from "react";

export function ToDos() {
    const [toDos, setToDos] = useState([]);

    function fetchData() {
        async function fetchToDos() {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
            setToDos(data.map(toDo => toDo.title));
        };
        fetchToDos();
    }

    useEffect(fetchData, []);

    return (
        <div>
            {
                toDos.map((toDo, index) => {
                    return <p key={index}> {toDo} </p>
                })
            }
            
        </div>
    );
}