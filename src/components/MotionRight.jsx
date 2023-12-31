import { useEffect, useRef, useState } from 'react';
import "../styles/motion.scss";

const MotionRight = ({ children }) => {
    const myRef = useRef();
    const [visible, setVisible] = useState();

    // implement intersection observer for grab specific section or component on screen
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        }, {
            threshold: .1
        })
        observer.observe(myRef.current)
    }, []);

    return (
        <div ref={myRef} className={visible ? "motion3" : "motion4"}>
            {children}
        </div>
    );
};

export default MotionRight;