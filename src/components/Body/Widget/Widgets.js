import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle,url) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleright">
        <a href={url}><h4>{heading}</h4></a>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>Upcoming Events</h2>
        <InfoIcon />
      </div>

      {newsArticle("Reverb'23", "SIT's annual cultural fest","https://www.instagram.com/sitreverbfest/?hl=en")}
      {newsArticle("Zindi Africa Hackathon","Cash Prize of Rs.10000!! Join Nowww","https://zindi.africa/")}
    </div>
  )
}

export default Widgets
