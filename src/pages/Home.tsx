import Form from "../components/form/form";
import Counter from "../components/counter/Counter";
import Faq from "../components/faq/Faq";
import SwitchDayNight from "../components/daynight/DayNight";


const Home = () => {
    return (
        <>
            <Form />
            <Counter />
            <Faq />
            <SwitchDayNight />
        </>
    );
}

export default Home;