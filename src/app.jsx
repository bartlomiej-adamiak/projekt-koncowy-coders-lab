import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

require('./scss/main.scss');
//or
//require('../css/main.css')

import {Header} from './components/header.jsx';
import {Hero} from './components/hero.jsx';
import {Foe} from './components/foe.jsx';
import {Tooltip} from './components/tooltip.jsx';
import {FightingSystem} from './components/fightingsystem.jsx';

class App extends React.Component {
  
   constructor(props){
     super(props);
     this.state = {
        hero: null,
        foe: null,
        selected: "",
        playerPoints: 0
     }

   }

   componentDidMount() {


    let id = Math.floor(Math.random() * 730)

    axios.get(`http://superheroapi.com/api/2013413738718394/${id}`)
     .then((res)=> {
       console.log(res)
       this.setState({
         hero: res.data
       })
      //  .catch((error) => {
      //   console.log('to co chce', error.request)
      // })
      

     })

     id = Math.floor(Math.random() * 730)

     axios.get(`http://superheroapi.com/api/2013413738718394/${id}`)
     .then((res)=> {
       console.log(res)
       this.setState({
         foe: res.data
       })
      //  .catch((error) => {
      //   console.log('to co chce', error.request)
      // })
       

     })
  }

  renderAgain = () => {

    let id = Math.floor(Math.random() * 730)

    axios.get(`http://superheroapi.com/api/2013413738718394/${id}`)
     .then((res)=> {
       console.log(res)
       this.setState({
         hero: res.data
       })
      //  .catch((error) => {
      //   console.log('to co chce', error.request)
      // })
      

     })

     id = Math.floor(Math.random() * 730)

     axios.get(`http://superheroapi.com/api/2013413738718394/${id}`)
     .then((res)=> {
       console.log(res)
       this.setState({
         foe: res.data
       })
      //  .catch((error) => {
      //   console.log('to co chce', error.request)
      // })
       

     })
  }

  getSelected = (arg) => {

      console.log("Who wins ", arg);

    this.setState({
      selected: arg
    }, () => {
      this.checkWhoWins(arg);
    })

  }

  checkWhoWins = (arg) => {

      if (this.state.hero.powerstats.strength == 'null') {
          this.state.hero.powerstats.strength = "0"
      };
      if (this.state.hero.powerstats.intelligence == 'null') {
          this.state.hero.powerstats.intelligence = "0"
      };
      if (this.state.hero.powerstats.speed == 'null') {
          this.state.hero.powerstats.speed = "0"
      };
      if (this.state.hero.powerstats.power == 'null') {
          this.state.hero.powerstats.power = "0"
      };
      if (this.state.hero.powerstats.durability == 'null') {
          this.state.hero.powerstats.durability = "0"
      };
      if (this.state.hero.powerstats.combat == 'null') {
          this.state.hero.powerstats.combat = "0"
      };

      if (this.state.foe.powerstats.strength == 'null') {
          this.state.foe.powerstats.strength = "0"
          };
      if (this.state.foe.powerstats.intelligence == 'null') {
          this.state.foe.powerstats.intelligence = "0"
          };
      if (this.state.foe.powerstats.speed == 'null') {
          this.state.foe.powerstats.speed = "0"
          };
      if (this.state.foe.powerstats.power == 'null') {
          this.state.foe.powerstats.power = "0"
          };
      if (this.state.foe.powerstats.durability == 'null') {
          this.state.foe.powerstats.durability = "0"
          };
      if (this.state.foe.powerstats.combat == 'null') {
          this.state.foe.powerstats.combat = "0"
          };

      let heroPoints = Number(this.state.hero.powerstats.strength) +   Number(this.state.hero.powerstats.intelligence) + Number(this.state.hero.powerstats.speed) + Number(this.state.hero.powerstats.power) + Number(this.state.hero.powerstats.durability) + Number(this.state.hero.powerstats.combat);
          
      let foePoints = Number(this.state.foe.powerstats.strength) + Number(this.state.foe.powerstats.intelligence) + Number(this.state.foe.powerstats.speed) + Number(this.state.foe.powerstats.power) + Number(this.state.foe.powerstats.durability) + Number(this.state.foe.powerstats.combat); 

    let win = "";

    if(heroPoints > foePoints || heroPoints == foePoints) {
      win = this.state.hero.name;
    } else {
      win = this.state.foe.name;
    }

    this.setState({
      playerPoints: win === arg ? this.state.playerPoints + 1 : this.state.playerPoints * 0
    }, () => {
      this.renderAgain();
    })
  }

   render() {
     return (
      <div>
     <Header />
     <div className="points__container">
     <div className="points">
     <span>Your points:</span>
     <span className="number"> {this.state.playerPoints} </span>
     </div>
     </div>
     <div className="arena">
     <Hero chosen={this.getSelected} data1={this.state.hero} data2={this.state.foe} />
     <FightingSystem addPoints={this.addPoints} selected={this.state.selected} data1={this.state.hero} data2={this.state.foe}/>
     <Foe chosen={this.getSelected} data1={this.state.hero} data2={this.state.foe} />
     </div>
     
     </div>
     )
   }
 }

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )

})