import { useEffect, useState } from "react";
import "../styles/client.scss";
import MotionRight from "./MotionRight";

const Clients = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/clients.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div id="clients" className="clientBg">
            <div>
                <div className="clientHeader">
                    <h4>Clients</h4>
                    <h1>Our Client</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, atque.</p>
                </div>
                <div className="clientDetails">
                    {
                        data.map((item, i) => (
                            <MotionRight key={i} >
                                <div className="clientImage">
                                    <img src={item.image} alt="clientImage" />
                                </div>
                            </MotionRight>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Clients;