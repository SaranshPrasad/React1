import React from "react";
import ReactDOM from "react-dom/client";

// Create React ELement - old methods 
// const heading = React.createElement('h1', {id:"heading"}, "Namaste React 👻");

// JSX -  is not html in JS , it is html like syntax or xml-like  - new and cool method 
const jsxHeading =  (<h1> Namaste React 🍨</h1>);
// React Component -  Everything in the react is a component 
// Class based component - OLD
// Functional Component - NEW 
const HComp = () =>{
    return <h1>Namaste React 😊</h1>;
};

const Hc = () => (
   <div id="container">
    
    {jsxHeading} 
    <h1>Hello </h1>
   </div>
);
// create root
const root = ReactDOM.createRoot(document.getElementById('root'));
// render root
root.render(<Hc />); 