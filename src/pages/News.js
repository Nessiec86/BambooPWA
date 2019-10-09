import React, { Component } from 'react';
import Nav from '../Components/Nav';
import {Button} from 'react-bootstrap';
import '../News.css';
import arrow from '../img/back.svg';



class News extends Component {
  
  handleClick = (url) => {
    alert(`Clicked on link to: "${url}"`);
  }

  handleReturn = () => {
    window.history.back()
}
  render () {  
    const links = [
      {
        icon: "fas fa-tachometer-alt",
        label: "Dashboard",
        url: "Dashboard",
        id: 1
      },
      {
        icon: "fas fa-user",
        label: "Profile",
        url: "Profile",
        id: 2
      },
      {
        icon: "fas fa-cog",
        label: "Settings",
        url: "Settings",
        id: 3
      },
      {
        icon: "fas fa-sign-out-alt",
        label: "Logout",
        url: "Logout", 
        id: 4
      },
      
    ]
    
    
      return (
        <nav className="sidebar-container">
        { links.map(link => {
            return (
              <div
                onClick={() => this.handleClick(link.url)}
                className="link"
                key={link.id}
              >
                <span className="link-icon">
                  <i className={link.icon} />
                </span>
                {link.label}
              </div>
            )
          })
      }
      <div>
        <Button style={{backgroundColor:'transparent', borderColor:'transparent'}}onClick={()=> this.handleReturn()}><img src={arrow} alt="log" style={{width: '2.5rem', height: '1rem'}}/></Button>
      </div>
      </nav>
    )
  }
}

export default News;