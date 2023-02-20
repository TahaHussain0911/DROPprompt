import React, { useContext, useState, useEffect } from "react";
import Promptbox from "../PromptBox/Promptbox";
import myGif from './myGif.gif';
import "./Form.css";
import PromptContext from "../../context/PromptContext";
const Form = (props) => {
  const getContext = useContext(PromptContext);
  const { input, setinput, getPrompt, image, wait} = getContext;
  const [inputValue, setinputValue] = useState("");
  const [placeHold, setplaceHold] = useState("Enter a keyword");
  useEffect(() => {
    getPrompt();
  }, [input]); // we set the dependency of use Effect to input state so that every time
              // input state is updated the function in useEffect block will be called

  const formGenerate = (e) => {
    e.preventDefault();  // Default behaviour of refreshing the page is prevented once user
                        // clicks the generate button 
    setinput(inputValue);  // value of user is stored in the input state and passed to the
                          //  getPrompt function in the useEffect hook
    setplaceHold(inputValue);
    setinputValue("");
  };
  const changeValue = (e) => {
    setinputValue(e.target.value);  // the inputValue state will hold the value user enters 
  };
  return (
    <div className="form-container">
      <h1 className="heading" style={{ color: "rgb(0, 0, 0)"}}>Generating Prompts</h1>
      <h6 style={{textAlign:"center"}}>Enter Keywords to Generate Prompts</h6>
      <form onSubmit={formGenerate}>
        <div className="mb-3" style={{display:"flex", }}>
          <input
            type="text"
            className="form-control"
            placeholder={`${placeHold}`}
            value={inputValue}
            onChange={changeValue}
          />
          <button style={{justifyContent:"flex-end",
           backgroundColor:"#212529",width:"150px", height:"40px",
           marginTop: "14vh", outline:"none" ,marginLeft:"5px"}} type="submit" className="btn btn-primary">
          Generate
        </button>
        </div>
        
      </form>
      <div className="prompt-container">
        <div className="prompts">
          {/* ternary operator is used so that if the wait is true the GIF will be shown
           else the response will be shown*/}
          {wait ? (
            <img src={myGif} alt="my-gif" />
          ) : (
            image.map((element) => {
              return (
                <Promptbox imageSrc={element.image} promptText={element.text} />
                // props are send to the Promptbox component contaning prompt and the image 
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
