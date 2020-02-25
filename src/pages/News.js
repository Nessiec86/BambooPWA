import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
        <>
        <nav className="sidebar-container">
        {/* { links.map(link => {
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
     */}
      <div className='link'>
        <span className='link-icon'>
          <Link to='/Clock' className='fas fa-clock' style={{color:'white'}}/>
        </span>
          Clock
      </div>
      <div className='link'>
        <span className='link-icon'>
          <Link to='/Profile' className='fas fa-user' style={{color:'white'}}/>
        </span>
          Profile
      </div>
      <div className='link'> 
        <span className='link-icon'>
          <Button className='fas fa-backward' style={{backgroundColor:'transparent', border:'transparent'}}onClick={()=> this.handleReturn()}/>
        </span>
        Back
      </div>
      </nav>
    </>
    )
  }
}

export default News;