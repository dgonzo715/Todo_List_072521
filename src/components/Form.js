import React, { useState } from 'react';

const Form = (props) => {
const {skillsList, setSkillsList} = props;
const [skillText, setSkillText] = useState("");
const [skillChecked, setSkillChecked] = useState(true);  


const submitHandler = (e) => {
e.preventDefault();

    console.log("skill submitted: " + skillText);
    setSkillsList([
        ...skillsList,
        { 
            skillName: skillText,
            isSkillChecked: skillChecked,
        }    
        ]); // I needed the getter and setter to be able to add to an array

    setSkillText(""); //This reset the value inside the text input
    setSkillChecked(true);    
}
    return(
        <div>
            
            <form onSubmit={ submitHandler }>
                <p><label>Add a Skill:</label></p>
                <p><input 
                  type="text" 
                  name="skillText"
                  value={ skillText }
                  onChange={ (e) => setSkillText(e.target.value) }
                  /></p>
                  <p>
                      <input type="checkbox"
                        name="skillChecked"
                        checked={ skillChecked } 
                        onChange={ () => setSkillChecked( !skillChecked ) }
                      />
                      <label>Very Skilled!</label>
                  </p>
                  <p><button>Add Skill</button></p>
            </form>
        </div>
    )
}

export default Form;