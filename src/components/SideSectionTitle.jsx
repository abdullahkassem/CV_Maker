import '../styles/SideSectionTitle.css'

export default function SideSectionTitle(props){
    return(
        <div className="SideSectionTitle">
            <h2>{props.name}</h2>
            <hr />
        </div>
    )
}