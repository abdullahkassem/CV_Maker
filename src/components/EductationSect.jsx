import '../styles/EductationSect.css'
import '../styles/ContactSection.css'
import SideSectionTitle from './SideSectionTitle.jsx'
import { useState, useId, useContext } from 'react';
import { EditContext } from './EditContext';


function EducationEntry(props) {
    //sYear + ' - ' + eYear
    const [sYear, setsYear] = useState(props.sYear);
    const [eYear, seteYear] = useState(props.eYear);
    const [degree, setdegree] = useState(props.degree);
    const [uni, setuni] = useState(props.uni);

    const durationID = useId();
    const degreeID = useId();
    const uniID = useId();
    const edit = useContext(EditContext);
    //{(edit.edit=='1')?():()}



    return (
        <>
        {(edit.edit == '1') ? 
            (<div className="EducationEntryEdit EducationEntry">

                <input type='text' name={'sYear' + durationID} value={sYear} onChange={(e) => setsYear(e.target.value)} />
                <input type='text' name={'eYear' + durationID} value={eYear} onChange={(e) => seteYear(e.target.value)} />

                <input type='text' name={'degree' + degreeID} value={degree} onChange={(e) => setdegree(e.target.value)} />
                <input type='text' name={'uni' + uniID} value={uni} onChange={(e) => setuni(e.target.value)} />

            </div>):
            (<div className="EducationEntry">
                <p>{sYear + ' - ' + eYear}</p>
                <p>{degree}</p>
                <p>{uni}</p>
            </div>)}

        </>
    )
}

export default function EductationSect() {
    return (
        <div className="contactSect">
            <SideSectionTitle name='Education' />
            <EducationEntry sYear="2025" eYear='2027' degree='M.S. in Computer Science' uni='University of California' />
            <EducationEntry sYear="2019" eYear='2024' degree='B.S. in Computer Engineering' uni='University of London' />

        </div>
    )
}