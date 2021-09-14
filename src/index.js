import React from 'react';
// import { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

import reportWebVitals from './reportWebVitals';

// class WhoAmI extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             years: 26
//         };
//         this.nextYear =() =>{
//             this.setState(state =>({
//                 years: ++state.years
//             }));
//         };
//         // this.nextYear = this.nextYear.bind(this);
//     }

//     // nextYear(){
//     //     // console.log(1);
//     //     this.setState(state =>({
//     //         years: ++state.years
//     //     }));
//     // }
//     render(){
//         const {name, surname, link} = this.props;
//         const {years} = this.state;
//         return(
//             <React.Fragment>
//                 <button onClick={this.nextYear}>++</button>
//                 <h1>My name is {name}, sername - {surname}, years = {years}</h1>
//                 <a href={link}>My profile</a>
//             </React.Fragment>
//         )
//     }
// }

// const All =()=>{
//     return (
//         <React.Fragment>
//             <WhoAmI name="Oleg" surname="Ovchinnikov" link="https://vk.com" />
//             <WhoAmI name="Vera" surname="Stankovskay" link="https://vk.com" />
//             <WhoAmI name="Dima" surname="Dmitriev" link="https://vk.com" />
//         </React.Fragment>
//     )
// }


ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
