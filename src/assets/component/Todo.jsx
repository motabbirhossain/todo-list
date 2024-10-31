import React, {useState} from 'react';

const Todo = () => {
    const[todo, setTodo] = useState([])

    const onSubmit = (event)=>{
        event.preventDefault()

        let formData = new FormData(event.target);

        let name = formData.get('name')


        if (name == ""){
           alert("Please enter a To Do")
        }else {
            todo.push(name)
            setTodo([...todo])
        }
    }

    const removed = (index)=>{
        todo.splice(index,1)
        setTodo([...todo])
    }
    return (
        <div>
            <div className="container pt-5">
                <div className="card p-4">
                    <form onSubmit={onSubmit}>
                        <input name="name" className="form-control" type="text" placeholder='Inter Your Todo'/>
                        <hr/>
                        <button type='submite' className='btn btn-primary py-2 px-4'>Add To To</button>
                    </form>
                    <h2 className='mb-3 section-title'>To Do List</h2>
                    <ol>
                        {
                            todo.map((value, index)=>{
                                    return <li className='d-flex align-items-center justify-content-between' key={index}> {index + 1}. {value} <button className='btn btn-danger py-2 px-4' onClick={()=>(removed(index))}>Close</button></li>
                                }
                            )}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Todo;