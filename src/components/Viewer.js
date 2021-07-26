import React from 'react';

const Viewer = (props) => {
    const {skillsList, setSkillsList} = props;

    const removeSkill = (skillText) => {
        let newSkillList = skillsList.filter((oneSkill, index) => {
            console.log(index);
            console.log(oneSkill);
            return oneSkill.skillName !== skillText;
        });

        setSkillsList(newSkillList);
    }
    return(
        <div>
            View skills Here:
            {
            skillsList.map((skill) => (
              <div>
                <p>{ skill.skillName }</p>
                {
                    skill.isSkillChecked ?
                    <span style={{color:"red"}}>skillChecked!!</span>
                    : null
                }
                <p><button onClick={() => removeSkill(skill.skillName)}>Remove Skill</button></p>
              </div>    
            ))
            }
        </div>
    )
}

export default Viewer;