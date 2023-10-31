import { useEffect, useState } from "react";
import "../styles/project.scss";
import MotionLeft from "./MotionLeft";
import { Link } from "react-router-dom";

const Projects = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/projects.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div id="projects" className="projectBg">
            <div>
                <div className="projectsHeader">
                    <h4>Our Works</h4>
                    <h1>Our Latest Works</h1>
                </div>

                <div className='projectsAlign'>
                    {
                        data.map((item) => (
                            <MotionLeft key={item.id} >
                                <div className="hovereffect">
                                    <img src={item.photo} alt="Project Photo" width={400} height={300} />
                                    <div className="overlay">
                                        <h2>{item.title}</h2>
                                        <p>
                                            <Link to="#"><button className='projectButton'>See More</button></Link>
                                        </p>
                                    </div>
                                </div>
                            </MotionLeft>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;