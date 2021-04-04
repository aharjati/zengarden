import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';
import { zenData } from "../src/data";
import Header from "../components/header.js";
import Profile from "../components/profile.js";
import Site from "../components/site.js";
import SiteList from "../components/siteList.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


class App extends React.Component{
  componentDidMount(){
    document.title = zenData.site.title
  }
  
  getSite(id) {
    zenData.features.find(feature=>feature.id == id)
  }

  render() {
      return(
        <Router>  
          <div>   
            <Header site={zenData.site} profile={zenData.profile}/>
          </div>
          <Switch>
            <Route path="/profile">
              <Profile profile={zenData.profile} />
            </Route>
            <Route path="/site/:siteId">
              <TmpSite />
            </Route>
            <Route path="/">
              <SiteList sites={zenData.data.features} title={zenData.data.metadata.title}/>
            </Route>
          </Switch>
        </Router>
          
          
      )
  }
}

function TmpSite() {
  let { siteId } = useParams();
  let site = zenData.data.features.find(feature=>feature.id == siteId);
  return <Site site={site}></Site>;
}


ReactDOM.render(<App />, document.getElementById('app'))
