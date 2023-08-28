import React from 'react'
const ConItem=(props)=>{
    let { title, description, imgsrc, date_time, og_name, og_icon, venue, city, country } = props;
    let time_whole=date_time;
    let time= time_whole.substring(11,16).concat(" AM")
    let date= time_whole.substring(0,10)
    let timezone= "UTC".concat(time_whole.substring(19))
    return(
        <>
        
         <div class="card my-4">
            <img src={imgsrc} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title"><b><i>{title}</i></b></h5>
                <p class="card-text">{description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Time: <b>{time}</b></li>
                <li class="list-group-item">Date: <b>{date}</b></li>
                <li class="list-group-item">TimeZone: <b>{timezone}</b></li>
                <li class="list-group-item">Organised by: <span className="badge"><img src={og_icon} height="25px"></img></span><b>{og_name}</b></li>
                <li class="list-group-item">Venue: <b>{venue}</b></li>
                <li class="list-group-item">City: <b>{city}</b></li>
                <li class="list-group-item">Country: <b>{country}</b></li>
                
            </ul>
        </div>    
        </> 

    )
}

export default ConItem;