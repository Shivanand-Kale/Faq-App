import React, { useState } from "react";

export default function Questions({questions}){
const [isOpen,setIsopen]=useState(false);


return(
    <section>
    <div className={isOpen? "open" : "closed" }>
        <h4>{questions.title}</h4>
        <button onClick={()=>setIsopen(!isOpen)}> {isOpen ? "-" : "+" } </button>
    </div>
    {isOpen && <p>{questions.info}</p>}
    </section>
)
};