import { WEATHER_URL, WEATHER_API_KEY } from "./constants";

class WetherService  {
    async fetchFiveDays(){
        return new Promise(async (success, failure)=>{
            try{
                const response =await fetch(`${WEATHER_URL}${WEATHER_API_KEY}`);
                if (response.ok){
                    const json =await response.json();
                    const data = json.list.filter(day=>day.dt_txt.includes("00:00:00")).map(item=> ({temp:item.main.temp, dt:item.dt, date:item.dt_txt, icon: item.weather[0].id,
                    desc: item.weather[0].description}));
                    success({response, data});
                }
                else{
                    failure({error:":("})
                }
            }
            catch(error){
failure(error);
            }
        })
    }
}
export default WetherService;