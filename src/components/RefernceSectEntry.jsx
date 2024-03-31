import "../styles/RefernceSect.css";
import { useState, useId, useContext } from "react";
import { EditContext } from "./EditContext";

export default function (props) {
    const edit = useContext(EditContext);
    const [name, setName] = useState(props.name);
    const [jobPos, setJobPos] = useState(props.jobPos);
    const [cmpName, setCmpName] = useState(props.cmpName);
    const [phone, setPhone] = useState(props.phone);
    const [email, setEmail] = useState(props.Email);

    const thisID = useId();

    //{(edit.edit=='1')?():()}

    return (
        <div className="RefernceSectEntry">
            {edit.edit == "1" ? (
                <label>
                    Name
                    <input
                        type="text"
                        name={"name" + thisID}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            ) : (
                <h2 className="name">{name}</h2>
            )}

            {edit.edit == "1" ? (
                <>
                    <label>
                        Job Position
                        <input
                            type="text"
                            name={"jobPos" + thisID}
                            value={jobPos}
                            onChange={(e) => setJobPos(e.target.value)}
                        />
                    </label>

                    <label>
                        Company Name
                        <input
                            type="text"
                            name={"cmpName" + thisID}
                            value={cmpName}
                            onChange={(e) => setCmpName(e.target.value)}
                        />
                    </label>
                </>
            ) : (
                <h3 className="job-cmp">{jobPos + ", " + cmpName}</h3>
            )}

            <div className="details">
                <h4>Phone: </h4>
                {edit.edit == "1" ? (
                    <input
                        type="text"
                        name={"phone" + thisID}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                ) : (
                    <p>{phone}</p>
                )}
            </div>
            <div className="details">
                <h4>Email: </h4>
                {edit.edit == "1" ? (
                    <input
                        type="text"
                        name={"email" + thisID}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                ) : (
                    <p>{email}</p>
                )}
            </div>
        </div>
    );
}
