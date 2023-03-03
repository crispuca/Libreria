import React from "react";

export default function Libros(titulo, autor, id){
    return(
        <li className="list-group-item d-flex justify-content-between align-items-start mb-3">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{titulo}</div>
                    {autor}
            </div>
            <button className="btn btn-info btn-sm">Editar</button>
            <button className="btn btn-outline-danger btn-sm">Eliminar</button>
        </li>
    )
}