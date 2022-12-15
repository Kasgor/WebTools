import React, { useState, useEffect} from "react";
import Card from "../src/Card"
import WetherService from "./services";
const weatherService = new WetherService();
const ForecastContainer =() =>{
    const [weatherData, setWeatherData] = useState([]);

const [isLoading, setIsLoading] = useState( false);

const [error, setError] = useState(false);

const [degreeType, setDegreeType] = useState("Fahrenheit");

useEffect(() => {

const fetchData = async () => {
setIsLoading(true) ;
const res = await weatherService.fetchFiveDays();
setWeatherData(res.data);
setIsLoading(false);
}
fetchData().catch((error)=>{
    console.log(error);
    setIsLoading(false);
    setError(true);
})
}, []);
 

    return(
<div className="container-fluid">
    <h1 style={{background:"linear-gradient(45deg, #9fa6f9 0%, #6f7bf7", color: "white"}}
    className="display-1 jumbotron py-5 mb-5">
        Days Forecast
        
    </h1>
<div className="container mt-5">
    <h5 className="class-muted">
        Austin TX, US
    </h5>
    <div className="row justify-content-center">
    {!isLoading ? weatherData.map(item => (
<Card key={item.dt} data={item}/>
)) : <div>Loading data..... </div>}
        </div>  
        {error && <h3>Error loading data </h3>}
</div>
</div>
    )
};

export default ForecastContainer;