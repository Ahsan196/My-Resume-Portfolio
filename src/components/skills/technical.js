import React from 'react'

function technical(props) {
    const techSkills = props.dict;
    console.log("props",props)
     
    //  const listItems = techSkills.map((skill) =>
    // <ListItem key={skill}
    //           value={skill} />
    // );
    return (
        <div>
          
      <div className="card-body">
        <div className="row ">
         <div className="entry">         
             <h5 ><b>Technical</b></h5>
           <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="content">
            {
                     Object.keys(techSkills).map((techSkill,index)=>{
                        return(
                            <div>
                            <h3>{techSkill}</h3>
                            <ul className="skills">
                                {techSkills[techSkill].map((skill,index)=>{
                                   return(
                                    <li key={index}>
                                        {skill}
                                    </li>
                                    )

                                }
                                )}
                            </ul>
                            
                            </div>
                        )
                    })

            }
          </div>
        </div>
        </div>
      </div>
    </div>
        
    </div>
    )
}

export default technical
