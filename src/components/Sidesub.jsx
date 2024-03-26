import '../styles/Sidesub.css'

function Sidesub(props){

    return(
        <div className="Sidesub">
            <h3 >{props.head}</h3>
            <h4 >{props.detail}</h4>
        </div>
    )
}




export default Sidesub;