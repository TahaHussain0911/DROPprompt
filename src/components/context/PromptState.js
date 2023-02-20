import React, { useEffect, useState } from "react";
import PromptContext from "./PromptContext";
import { Configuration, OpenAIApi } from "openai";
const PromptState = (props) => {
  const API_KEY = "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";
  const [prompt, setprompt] = useState([]);
  const [image, setimage] = useState([]);
  const [wait, setwait] = useState(false);
  const [input, setinput] = useState("");
  const configuration = new Configuration({
    apiKey: API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const getPrompt = async () => {
    if (input !== "") {
      setwait(true);  // A loader is shown when the user clicks generate for which wait is set to true
      try {
        const promptResponse = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Generate a sentence to create an artistic image for ${input}`,
          // the value of the input state will be received from the Form.js
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          n: 1,  // since n is 1 we will get only one prompt
          frequency_penalty: 0,
          presence_penalty: 0,
        });
        // The promptResponse stores the response in JSON format
        setprompt(promptResponse.data.choices);  // in prompt state the sentence generated from the keyword is stored
        
        let promptArr = [];  // the promptArr carries all the prompts in an array

        let both = []; // the both array will store the data in an array of objects form
                      // it will contain an object of each prompt along with its image source
        
        promptArr = promptResponse.data.choices; // copying the data in promptArr

        for (let i = 0; i < promptArr.length; i++) {
        // For loop is used so that if in future we need to generate
        // more than one prompts we can loop the imageGenerate call 
        // for the number of prompts generated     
          const imageResponse = await openai.createImage({
            prompt: promptArr[i].text,
            n: 1,
            size: "512x512",
          });
          let obj = {
            text: promptArr[i].text,
            image: imageResponse.data.data[0].url,
          };
          both.push(obj);
        }
        setimage(both); // the response of prompt and image is stored in an image state 
        console.log(both);
        setwait(false);  // wait is set to false at the end so that once we get the response
                        // The loading bar is not shown
      } catch (error) {
        console.log(error);  // If the API is not responding we can log the error details
      }
    }
  };

  return (
    <PromptContext.Provider
      value={{
        getPrompt,
        input,
        setinput,
        prompt,
        image,
        wait,
      }}
    >
      {props.children}
    </PromptContext.Provider>
  );
};

export default PromptState;
