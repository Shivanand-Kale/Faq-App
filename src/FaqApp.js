import React  from "react";
import Questions from "./Questions";
import './mystles.css'

const FaqApp=()=>{

return(
    <>
<h1>Project FAQ</h1>
<div className="container">
    <h2>Frequently asked Questions</h2>
    <div className="questions">
    {questions.map((questions)=>{
          return <Questions key={questions.id} questions={questions}/>
    })
    }
    </div>
</div>
</>
)
}


export default FaqApp;



const questions = [
    {
      id: 1,
      title: "Is this a good product?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 2,
      title: "How much does it cost?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 3,
      title: "When can I get it?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
  ];
  