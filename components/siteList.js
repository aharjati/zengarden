import React from 'react';
import {Link} from "react-router-dom";
import "../styles/siteList.css";

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

    function linkColumn() { return <div key="linkCol" className="tableList">
                <h4 className="colHeader">Title</h4>
                {
                    Object.entries(props.sites).map(([key, site], i) => 
                        <h5  key={"link-"+site.id}  className="content"><Link to={"/site/"+site.id}>{site.properties.title}</Link></h5>
                    )
                }
            </div>;
    }

    function magColumn() { return <div key="magCol" className="tableList">
            <h4 className="colHeader">Magnitude</h4>
            {
                Object.entries(props.sites).map(([key, site], i) => 
                    <h5 key={"mag-"+site.id} className="contentMid">{site.properties.mag}</h5>
                )
            }
        </div>;
    }

    function timeColumn() { 
        const tools = require('../lib/tools.js');
        return <div key="timeCol" className="tableList">
            <h4 className="colHeader">Time</h4>
            {
                Object.entries(props.sites).map(([key, site], i) => 
                    <h5 key={"time-"+site.id}  className="contentMid">{tools.convertTimestamp(site.properties.time)}</h5>
                )
            }
        </div>;
    }

    return ( 
        <div>
            <h3 className="siteListData">{props.title}</h3>
            <span className="mainTable">
                {linkColumn()}
                {magColumn()}
                {timeColumn()}
            </span>
        </div>
        
    );
}

export default Site;