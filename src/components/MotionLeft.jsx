import { useEffect, useRef, useState } from 'react';
import "../styles/motion.scss";

const MotionLeft = ({ children }) => {
    const myRef = useRef();
    const [visible, setVisible] = useState();

    // implement intersection observer for grab specific section or component on screen
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        }, {
            threshold: .5
        })
        observer.observe(myRef.current)
    }, []);

    return (
        <div ref={myRef} className={visible ? "motion1" : "motion2"}>
            {children}
        </div>
    );
};

export default MotionLeft;