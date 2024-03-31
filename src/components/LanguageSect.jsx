import SideSectionTitle from "./SideSectionTitle.jsx";
import "../styles/LanguageSect.css";
import RemoveButton from "./RemoveButton.jsx";
import AddButton from "./AddButton.jsx";
import { useState, useId, useContext } from "react";
import { EditContext } from "./EditContext";

export default function LanguageSect() {
    let tempLangArray = ["English", "French"];

    const [LangArray, setLangArray] = useState(tempLangArray);
    const edit = useContext(EditContext);

    return (
        <>
            {edit.edit == "1" ? (
                <div className="contactSect">
                    <SideSectionTitle name="Languages" />
                    <AddButton myState={[LangArray, setLangArray]}/>
                    <div className="langList">
                        {LangArray.map((lang) => {
                            return (
                                <RemoveButton key={lang} name={lang} myState={[LangArray, setLangArray]} >
                                    <p>{lang}</p>
                                </RemoveButton>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="contactSect">
                    <SideSectionTitle name="Languages" />
                    <div className="langList">
                        {LangArray.map((lang) => {
                            return <p key={lang}>{lang}</p>;
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
