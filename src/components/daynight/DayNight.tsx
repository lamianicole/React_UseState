import { useState } from "react"
import "./DayNight.css";

const SwitchDayNight = () => {
    const [isNightMode, setIsNightMode] = useState<boolean>(false);

    const changeMode = () => {
        setIsNightMode(!isNightMode)
    }

    return (
        <section className={`toggle-section ${isNightMode ? "night" : "day"}`}>
            <h3>Aufgabe React-useState-Day-Night-Change-Level-2_2 </h3>
            <h1>{isNightMode ? "Night" : "Day"}</h1>
            <button onClick={changeMode} className="toggle-btn">Change to {isNightMode ? "Day" : "Night"}</button>
        </section>
    );
}

export default SwitchDayNight;