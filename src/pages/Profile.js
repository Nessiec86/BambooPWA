import React, {Component} from 'react';
import Nav from '../Components/Nav';
import { Button } from 'react-bootstrap';
import user from '../lib/Comerzzia-service';


class Profile extends Component {

   
state = {
    data: '',
}

    handleSubmit = () => {
        console.log("estoy en boton")
        user.read ()
        .then((data) => { 
                this.setState({
                    data,
                });
            
        })
        .catch(error => {
           
            });
        
    };
  
  render () {  
      console.log(this.state.data)
    return (
        <>
        <Nav/>
        <Button variant="success"className='val' onClick={() => this.handleSubmit()}>Validar</Button>
        <div className="myContainer">
                 <div className="profile-background">
                     <img src="/Images/profile-placeholder@3x.png" alt="face"/>
                     <div className="profile-name">
                         {/* <h1>{username}</h1>
                         <h1>{surname}</h1> */}
                     </div>
                 </div>
                 <section style={{margin:'1rem 0 0 0'}}>
                     <h3 className="info-h3">Personal information</h3>
                     <div className="profile">
                         <img src="/Images/profile-placeholder@3x.png" alt="face"/>
                         <button>
                             {/* <Link to={{
                                pathname: '/profile/edit',
                                state: { 
                                user,
                                }}}><p>Edit</p></Link> */}
                        </button>
                    </div>
                    <ul className="profile-ul">
                        <li className="profile-list">
                            <div className="profile-data">
                                <h3>Name</h3>
                                <p></p>
                            </div>
                        </li>
                        <li className="profile-list">
                            <div className="profile-data">
                                <h3>Surname</h3>
                                <p></p>
                            </div>
                        </li>
                        <li className="profile-list">
                            <div className="profile-data">
                                <h3>Age</h3>
                                <p></p>
                            </div>
                         </li>
                        <li className="profile-list">
                             <div className="profile-data">
                                 <h3>Email</h3>
                                 <p></p>
                             </div>
                         </li>
                         <li className="profile-list">
                             <div className="profile-data">
                                 <h3>Main City</h3>
                                 <p>Barcelona</p>
                             </div>
                         </li>
                     </ul>
                     <div>
                         <div className="App">
                             <h3 className="info-h3">My Credit Cards</h3>
                             {/* {card ? card.map(card => {
                                return  <div key={card._id} className="card-list">
                                            <div>
                                                <li>{card.cardname}</li>
                                                <li>{card.cardnum}</li>
                                            </div>
                                            <button  onClick={()=> this.handleDelete (card._id)}><p>Delete Card</p></button>
                                        </div>
                                }) : */}
                            <p>No cards</p>
                            } 
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
  }
}
// state = {
//     userupdate: [],
//     card: [],
//     status: "loaded"
// }

// componentDidMount = () => {
//     CardService.read()
//         .then((card) => {
//             this.setState({
//                 card,
//                 status: "loaded"
//             });
//         })
//         .catch(error => {
//             this.setState({
//                 status: "error"
//         });
//     });
//     AuthService.read()
//         .then((user) => {
//             this.setState({
//                 userupdate: user,
//                 status: "loaded"
//             });
//         })
//         .catch(error => {
//             this.setState({
//                 status: "error"
//         });
//     });
// };

// handleDelete = cardId => {
//     CardService.delete(cardId)
//     CardService.read()
//         .then((card) => {
//             this.setState({
//                 card,
//                 status: "loaded"
//             });
//         })
//         .catch(error => {
//             this.setState({
//                 status: "error"
//         });
//     });
// };

// render() {
//     const { card } = this.state;
//     const { username, surname, } = this.props.user;
//     const user = this.props.user;
//     const { age, email } = this.state.userupdate;

//     switch (this.state.status) {
//         case "loading":
//             return <LoadingDots/>;
//         case "loaded":
//             return (    
//             <div className="myContainer">
//                 <div className="profile-background">
//                     <img src="/Images/profile-placeholder@3x.png" alt="face"/>
//                     <div className="profile-name">
//                         <h1>{username}</h1>
//                         <h1>{surname}</h1>
//                     </div>
//                 </div>
//                 <section style={{margin:'1rem 0 0 0'}}>
//                     <h3 className="info-h3">Personal information</h3>
//                     <div className="profile">
//                         <img src="/Images/profile-placeholder@3x.png" alt="face"/>
//                         <button>
//                             <Link to={{
//                                 pathname: '/profile/edit',
//                                 state: { 
//                                 user,
//                                 }}}><p>Edit</p></Link>
//                         </button>
//                     </div>
//                     <ul className="profile-ul">
//                         <li className="profile-list">
//                             <div className="profile-data">
//                                 <h3>Name</h3>
//                                 <p>{username}</p>
//                             </div>
//                         </li>
//                         <li className="profile-list">
//                             <div className="profile-data">
//                                 <h3>Surname</h3>
//                                 <p>{surname}</p>
//                             </div>
//                         </li>
//                         <li className="profile-list">
//                             <div className="profile-data">
//                                 <h3>Age</h3>
//                                 <p>{age}</p>
//                             </div>
//                         </li>
//                         <li className="profile-list">
//                             <div className="profile-data">
//                                 <h3>Email</h3>
//                                 <p>{email}</p>
//                             </div>
//                         </li>
//                         <li className="profile-list">
//                             <div className="profile-data">
//                                 <h3>Main City</h3>
//                                 <p>Barcelona</p>
//                             </div>
//                         </li>
//                     </ul>
//                     <div>
//                         <div className="App">
//                             <h3 className="info-h3">My Credit Cards</h3>
//                             {card ? card.map(card => {
//                                 return  <div key={card._id} className="card-list">
//                                             <div>
//                                                 <li>{card.cardname}</li>
//                                                 <li>{card.cardnum}</li>
//                                             </div>
//                                             <button  onClick={()=> this.handleDelete (card._id)}><p>Delete Card</p></button>
//                                         </div>
//                                 }) :
//                             <p>No cards</p>
//                             } 
//                         </div>
//                     </div>
//                 </section>
//                 <div style={{margin: '-3rem 0 1rem 0'}}>
//                     <Navbar/>
//                 </div>
//             </div>
//             );
//         case "error":
//             return "error!!!! ";
//         default:
//             break;
//     }
// }
// }

export default Profile;