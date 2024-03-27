import '../styles/RefernceSect.css'

export default function(props){
    return(
        <div className="RefernceSectEntry">
            <h2 className='name'>{props.name}</h2>
            <h3 className='job-cmp'>{props.jobPos + ', ' + props.cmpName}</h3>
            <div className="details">
                <h4>Phone: </h4>
                <p>{props.phone}</p>
            </div>
            <div className="details">
                <h4>Email: </h4>
                <p>{props.email}</p>
            </div>
        </div>
    )
}