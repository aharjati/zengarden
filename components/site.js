import React from 'react';
import "../styles/site.css";

function Site(props) {
    /*
 "properties": {
          "mag": 1.19,
          "place": "3km ENE of The Geysers, CA",
          "time": 1523647508250,
          "updated": 1523648041843,
          "tz": -480,
          "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72999021",
          "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc72999021.geojson",
          "felt": null,
          "cdi": null,
          "mmi": null,
          "alert": null,
          "status": "automatic",
          "tsunami": 0,
          "sig": 22,
          "net": "nc",
          "code": "72999021",
          "ids": ",nc72999021,",
          "sources": ",nc,",
          "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
          "nst": 12,
          "dmin": 0.008595,
          "rms": 0.04,
          "gap": 68,
          "magType": "md",
          "type": "earthquake",
          "title": "M 1.2 - 3km ENE of The Geysers, CA"
        },

    */
    function getRow(title,content) { return <span key={title} className="siteRow">
            <h5 className="siteContent">{title}</h5>
            <h5 className="siteContentColor">{content}</h5>
        </span>;
    }
    
    const tools = require('../lib/tools.js');

    return <div className="siteMainTable">
        <span key="title">
            <h3>{props.site.properties.title}</h3>
        </span>
        <span>
            {getRow("Title",props.site.properties.title)}
            {getRow("Magnitude",props.site.properties.mag)}
            {getRow("Time",tools.convertTimestamp(props.site.properties.time))}
            {getRow("Status",props.site.properties.status)}
            {getRow("Tsunami",props.site.properties.tsunami)}
            {getRow("Type",props.site.properties.type)}
        </span>
    </div>;
}

export default Site;