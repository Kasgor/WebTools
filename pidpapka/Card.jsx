import React from "react";

const Card = (props) =>{
const {temp, dt, iconId, desc } = props.data;
console.log(dt);
console.log(iconId);
console.log(desc);
    const icon = `owf owf-${iconId} owf-5zx`;
    const newDate= new Date(dt);
    //newDate.setDate(dt);
    console.log(newDate);
    const displayDay = {weekday:"long"};
    const displayDate ={month: "short", day:"numeric"};
    const day = newDate.toLocaleString('en-us', displayDay);
    const date = newDate.toLocaleString('en-us', displayDate);
   

    return(
<div className="col-sm-2">
    <div className="card p-3">
        <h3 className="card-title">
            {day}
             </h3>
        <p className="text-muted">{date}</p>
        <i className={icon} style={{fontSize:"5rem"}}/>
        
        <div className="card-body">
            <p className="card-text">{desc}</p>
        </div>
    </div>
</div>
    )
};

export default Card;