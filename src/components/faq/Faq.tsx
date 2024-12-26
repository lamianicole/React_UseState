import { useState } from "react";
import "./Faq.css";

const Faq = () => {
    // Zustand kurze Antwort
    const [isShortAnswerVisible, setIsShortAnswerVisible] = useState<boolean>(false);
    // Bonusaufgabe: weiterer state für lange Antwortoption
    const [isLongAnswerVisible, setIsLongAnswerVisible] = useState<boolean>(false);

    const toggleShortAnswer = () => {
        setIsShortAnswerVisible(!isShortAnswerVisible);
        setIsLongAnswerVisible(false); // Versteckt die lange Antwort, wenn die kurze Antwort geschlossen wird
    };

    const toggleLongAnswer = () => {
        setIsLongAnswerVisible(!isLongAnswerVisible);
    };

    return ( 
        <section className="faq-section">
            <h3>Aufgabe React-useState-Faq-Level-1_1</h3>
            <div className="faq-container">
                <p>Why is React great?</p>
                <button onClick={toggleShortAnswer}>⬇</button>
            </div>
            {/* ternary operator: Wenn isShortAnswerVisible true ist, dann wird die CSS-Klasse visible angewendet. Wenn isShortAnswerVisible false ist, dann wird die CSS-Klasse hide angewendet. */}
            <div className={`${isShortAnswerVisible ? "visible" : "hide"}`}>
                <p>Fast Learning Curve</p>
                <button className="more-info-button" onClick={toggleLongAnswer}>More Info ⬇</button>
                {/* ternary operator: Wenn isLongAnswerVisible true ist, dann wird die CSS-Klasse visible-long angewendet. Wenn isLongAnswerVisible false ist, dann wird die CSS-Klasse hide angewendet. */}
                <div className={`${isLongAnswerVisible ? "visible-long" : "hide"}`}>
                    <p>React is a very simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial. As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.</p>
                </div>
            </div>
        </section>
    );
};

export default Faq;