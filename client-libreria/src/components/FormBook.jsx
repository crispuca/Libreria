import React, { useState } from "react";

export default function FormBook(){
    const [libro,setLibro] = useState({
        titulo:"",
        autor:"",
        precio:''
    })

    const handleChange = (e)=>{
        let newLibro = {
            [e.target.name]: e.target.value,
            [e.target.content]: e.target.value
        }
        setLibro({...libro, ...newLibro})
        console.log(libro)  
    }

    const saveLibro = async ()=>{
        await fetch("http://localhost:8080/api/v1/books", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(libro),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        saveLibro()
    }

    return(
        <div className="card">
            <div className="card-header">
                Agregar Libro
            </div>
            <div className="card-body">
                <form action="" onSubmit={onSubmit}>
                    <div className="form-group mb-3">
                        <input name="titulo" onChange={handleChange} type="text" placeholder="titulo" className="form-control" />
                    </div>
                    <div className="form-group mb-3" >
                        <input name="autor" onChange={handleChange} type="text" placeholder="autor" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <input name="precio" onChange={handleChange} type="number" placeholder="precio" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-outline-success btn-sm btn-block">Guardar</button>
                </form>
            </div>
        </div>
    )
}