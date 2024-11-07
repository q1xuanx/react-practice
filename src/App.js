import { useState } from "react";

 
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default function App(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length)
  }; 
  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  }
  return <div className="steps">
    <div className="numbers">
      {messages.map((_, index) => (
        <div key={index} className={index === currentIndex ? "active" : ""}>
          {index + 1}
        </div>
      ))}
    </div>
    <Displaytitle index={currentIndex}/>
    <div className="buttons">
      <button style={{backgroundColor: '#7950f2', color: "#fff"}} onClick={previousEvent}>Previous</button>
      <button style={{backgroundColor: '#7950f2', color: "#fff"}} onClick={nextEvent}>Next</button>
    </div>
  </div>; 
}
function Displaytitle(props){
  return <p className="message">Step {props.index + 1}: {messages[props.index]}</p>
}
