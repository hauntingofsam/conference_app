import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Item from './item'

const ContentBox=(props)=>{
    const [content,setContent]=useState([]);
    const updatePage=async()=>{
        const url = 'https://gdscdev.vercel.app/api';
        let data = await fetch(url);
        let parsedData = await data.json();
        var{country,timestamp,keyword}=props;
        let contents=parsedData.content.data;
        if(country==='All' && timestamp==='All' && keyword==='All'){
            setContent(contents);
        }
        else if(country==="All" && keyword==='All'){
            setContent(contents.filter((item)=>{
                return timestamp===item.date_time.substring(0,7)
            }))
        }
        else if(timestamp==="All" && keyword==='All'){
            setContent(contents.filter((item)=>{
                return country==item.venue_country
            }))
        }
        else if(country==='All' && timestamp==='All'){
            
            setContent(contents.filter((item)=>{
                let desc=item.description;
                return desc.toLowerCase().includes(keyword.toLowerCase())
            }))
        }
    }
    useEffect(() => {
        updatePage();
    }, [props])
    return(
        <div className="content-whole">
        <div className="container my-3 contentbox">
            {/* <h3>Conferences</h3> */}
            <div className="row">
                {content.map((element) => {
                    return <div className="col-md-4" key={element.id}>
                <Item title={element.title} description={element.description} imgsrc={element.banner_image} date_time= {element.date_time} og_name={element.organiser_name} og_icon={element.organiser_icon} venue={element.venue_name} city={element.venue_city} country={element.venue_country}/>
                    </div>
                })}
            </div>

        </div >
        </div>
    )
}
ContentBox.defaultProps = {
    country: 'All',
    timestamp: 'All'
}

ContentBox.propTypes = {
    country: PropTypes.string,
    timestamp: PropTypes.string
}
export default ContentBox;