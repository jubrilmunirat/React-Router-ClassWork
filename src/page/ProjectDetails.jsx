import { useParams } from 'react-router-dom'
import Navbar from "../components/Navbar"
const ProjectDetails = () => {
    const params = useParams();
    return (
        <div>
            <Navbar />
            <h1> This is the Project Page</h1>
            <p> This Project name is<b> {params.id} </b></p>
        </div>
    )
}

export default ProjectDetails