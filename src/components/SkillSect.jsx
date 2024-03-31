import SideSectionTitle from "./SideSectionTitle.jsx";
import "../styles/SkillSect.css";
import RemoveButton from "./RemoveButton.jsx";
import AddButton from "./AddButton.jsx";

import { useState, useId, useContext } from "react";
import { EditContext } from "./EditContext";

//{(edit.edit=='1')?():()}

export default function SkillSect(props) {
  let tempSkillArray = [
    "C++",
    "Java",
    "MySql",
    "Web Development",
    "Mobile Development",
  ];

  const [skillArray, setSkillArray] = useState(tempSkillArray);

  const edit = useContext(EditContext);

  return (
    <>
      {edit.edit == "1" ? (
        <div className="contactSect">
          <SideSectionTitle name="Skills" />
          <AddButton myState={[skillArray,setSkillArray]}/>
          <ul className="skillList">
            {skillArray.map((skill) => {
              return (
                <RemoveButton key={skill} name ={skill} myState={[skillArray,setSkillArray]}>
                  <li>{skill}</li>
                </RemoveButton>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="contactSect">
          <SideSectionTitle name="Skills" />
          <ul className="skillList">
            {skillArray.map((skill) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
}
