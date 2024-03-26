import '../styles/ResName_Title.css'

export default function ResName_Title(props){

    return(
        <div className="ResName_Title">
            <h1 className="resName">
                <b style={{fontWeight: "bolder"}}>{props.firstName}</b>{" " + props.lastName}
            </h1>
            <h2>{props.title}</h2>
        </div>
    )
}

