import { useEffect, useState } from "react";
import "../styles/product.scss";
import { Link } from "react-router-dom";
import MotionLeft from "./MotionLeft";

const Products = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/products.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div id="products" className="productBg">
            <div>
                <div className="productHeader">
                    <h4>Our Products</h4>
                    <h1>What We Have Done</h1>
                </div>

                <div className='productsAlign'>
                    {
                        data.map((item) => (
                            <MotionLeft key={item.id} >
                                <div className="hovereffect">
                                    <img src={item.photo} alt="Product Photo" width={400} height={300} />
                                    <div className="overlay">
                                        <h2>{item.title}</h2>
                                        <p>
                                            <Link to="#"><button className='productButton'>See More</button></Link>
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

export default Products;