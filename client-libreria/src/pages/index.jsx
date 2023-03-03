import React, { useEffect, useState } from "react";
import FormBook from "../components/FormBook";
import Libros from "../components/Libros";
import ListBook from "../components/ListBook";

export default function Index(){

    const [libros, setLibros] = useState([])
    const getLibros = async ()=>{
        const response = await fetch('http://localhost:8080/api/v1/books')
        const result = await response.json()
        console.log(result)
        setLibros(result)
    }

    useEffect(()=>{
        getLibros();
    },[libros])

    const deleteLibro = async(id)=>{
        await fetch('http://localhost:8080/api/v1/books/'+id)
    }

    return(
        <div className="content-app">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <FormBook></FormBook>
                </div>
                <div className="col-sm-12 col-md-8">
                    <ListBook>
                        {libros.map((libro, index)=> (
                            <Libros key={index} deleteLibro={deleteLibro} id={libro.id} titulo={libro.titulo} autor={libro.autor} />
                        ) )}
                    </ListBook>
                </div>
            </div>
        </div>
    )
}