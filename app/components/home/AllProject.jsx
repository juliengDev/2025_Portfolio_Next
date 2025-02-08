import { Row } from "react-bootstrap";
import { Jumbotron } from "./migration";
import ProjectCard from "./ProjectCard";


const AllProject = ({heading,projects}) => {
  return (
     <Jumbotron fluid id="projects" className="bg-light m-0">       
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
       {projects.length 
       ? <div className="col md-6">
       <Row xs={1} lg={3} className="g-4">          
            {projects.map((project,index) => (
              <ProjectCard 
              key={`project-card-${index}`}
              id={`project-card-${index}`}
              value={project}
              />
            ))}         
        </Row>
        </div> : <p>No current project</p>
        }       
     </Jumbotron>    
  );
}

export default AllProject