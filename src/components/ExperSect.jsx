import ResContentSect from "./ResContentSect"
import ExpertSectEntry from "./ExpertSectEntry"
import '../styles/ExperSect.css'


export default function ExperSect(props){
    return (
        <div className="ExperSect">
            <ResContentSect SectName='Experience'/>
            <div className="addline">
                <ExpertSectEntry startYear='2023' endYear='present' compName='ABC company' compAddr='California, USA' jobPos='Software Developer' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempore non suscipit maiores quod fugiat! Maxime asperiores sapiente voluptatem officiis rerum ex, nulla similique, sit doloremque laudantium fugiat consequatur quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat unde consequatur delectus dolorem veniam accusamus aperiam quae, quas atque provident. Harum culpa tempore dolores iusto tenetur deleniti commodi? Aut, impedit.'/>
                <ExpertSectEntry startYear='2022' endYear='2023' compName='CBA company' compAddr='California, USA' jobPos='Software Developer' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempore non suscipit maiores quod fugiat! Maxime asperiores sapiente voluptatem officiis rerum ex, nulla similique, sit doloremque laudantium fugiat consequatur quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat unde consequatur delectus dolorem veniam accusamus aperiam quae, quas atque provident. Harum culpa tempore dolores iusto tenetur deleniti commodi? Aut, impedit.'/>
                <ExpertSectEntry startYear='2021' endYear='2022' compName='ACB company' compAddr='California, USA' jobPos='Software Developer' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempore non suscipit maiores quod fugiat! Maxime asperiores sapiente voluptatem officiis rerum ex, nulla similique, sit doloremque laudantium fugiat consequatur quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat unde consequatur delectus dolorem veniam accusamus aperiam quae, quas atque provident. Harum culpa tempore dolores iusto tenetur deleniti commodi? Aut, impedit.'/> 
            </div>
        </div>
    )
    
}