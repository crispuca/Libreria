import React from "react";

export default function ListBook({children}){
    return(
        <ol className="list-group list-group-numbered">
            {children}
        </ol>
    )
}