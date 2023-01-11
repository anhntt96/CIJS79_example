import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";
const Home = () => {

    const context = useContext(LanguageContext);

    const {dictionary, changeLanguage } = context;
    console.log(dictionary);
    return <div className="container">
        <h1>{dictionary.title}</h1>
        <div>{dictionary.welcomeDescription}</div>
        <button className="btn btn-success" onClick={changeLanguage}>{dictionary.buttonText}</button>
    </div>
}

export default Home;