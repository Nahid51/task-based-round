import { useEffect, useState } from "react";
import "../styles/team.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const MeetTheTeam = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/team.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div id="team" className="teamBg">
            <div>
                <div className="teamHeader">
                    <h4>Meet The Team</h4>
                    <h1>Meet Members Of Our Exclusive Team For Startup Business</h1>
                </div>
                <div className='teamAlignment'>
                    {isLoading ? <p>Loading...</p> :
                        data.map((item) => (
                            <div key={item.id}>
                                <div className='teamImage'>
                                    <img
                                        src={item.photo}
                                        alt='Team Photo'
                                        className='rounded-full'
                                    />
                                </div>
                                <div className="teamDetails">
                                    <h2>{item.name}</h2>
                                    <p style={{ color: "gray" }}>{item.position}</p>
                                    <nav>
                                        <Link to={item.social.facebook}><FaFacebookF size={32} className='teamSocialIcon' /></Link>
                                        <Link to={item.social.instagram}><FaInstagram size={32} className='teamSocialIcon' /></Link>
                                        <Link to={item.social.twitter}><FaTwitter size={32} className='teamSocialIcon' /></Link>
                                        <Link to={item.social.linkedin}><FaLinkedinIn size={32} className='teamSocialIcon' /></Link>
                                    </nav>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MeetTheTeam;