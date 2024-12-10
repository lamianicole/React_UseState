import { useState } from "react";
import "./Faq.css";

const Faq = () => {
    const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);

    const displayAnswer = () => {
        setIsAnswerVisible(!isAnswerVisible);
    }

    return ( 
        <section className="faq-section">
            <h3>Aufgabe React-useState-Faq-Level-1_1</h3>
            <div className="faq-container">
                <p>Why is React great?</p>
                <button onClick={displayAnswer}>⬇</button>
            </div>
            <div className={`${isAnswerVisible ? "visible" : "hide"}`}>
                <p>Fast Learning Curve</p>
            </div>
        </section>
    )
};

export default Faq;
