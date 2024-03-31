import '../styles/RemoveButton.css'

export default function(props){
    const handler = function(e){
        // console.log("button pressed state is "+props.myState[0]);
        // console.log("i am " + props.name)
        props.myState[1](props.myState[0].filter(s => (s!=props.name)));
    }
    return(
        <div className="RemovableItem">
            {props.children}
            <button type='button' className="RemoveButton " onClick={handler}></button>
        </div>
    )
}