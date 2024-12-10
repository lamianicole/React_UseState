import { useState } from "react";

const Form = () => {
    const [firstname, setFirstname] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const getFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(event.target.value)
    } 

    const getName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    return (
        <section className="form">
            <h3>Aufgabe React-useState-Input-Level-1_6 </h3>
            <input onChange={getFirstname} value={firstname} type="text" placeholder="Vorname"/>
            <input onChange={getName} value={name} type="text" placeholder="Nachname"/>
            <input onChange={getEmail} value={email} type="text" placeholder="E-Mail"/>

            <p>Vorname: {firstname}</p>
            <p>Nachname: {name}</p>
            <p>E-Mail: {email}</p>
        </section>
    );
}

export default Form;