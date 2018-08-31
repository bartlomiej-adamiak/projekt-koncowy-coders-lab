import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

let defaults = require('../images/superhero-default-img.png');

export class Foe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          data: null,
          name: "",
          image: "",
          strength: "",
          intelligence: "",
          speed: "",
          power: "",
          durability: "",
          combat: ""
        }
   
      }

      static getDerivedStateFromProps(props, state){

        if(props.data2 && props.data2 !== state.data) {

          return { 
          name: props.data2.name,
          image: props.data2.image.url,
          strength: props.data2.powerstats.strength,
          intelligence: props.data2.powerstats.intelligence,
          speed: props.data2.powerstats.speed,
          power: props.data2.powerstats.power,
          durability: props.data2.powerstats.durability,
          combat: props.data2.powerstats.combat,
          lore: props.data2.biography.publisher,
          alignment: props.data2.biography.alignment,
          affiliation: props.data2.connections["group-affiliation"],
          occupation: props.data2.work.occupation,
          data: props.data2
          
           }
           
        }
        return state;

      }

      handleClick = () => {

        
        if(typeof this.props.chosen === 'function') {
            this.props.chosen(this.state.name);
          }
          
      }

      render() {
          return <div className="foe">
            <img onClick={this.handleClick} src={this.state.image ? this.state.image : defaults} alt='Sorry! No image :(' height="300" width="300"></img>
              <span>{this.state.name}</span>

              <table className="tooltip">
              <td>Universe: {this.state.lore}</td> 
              <td>Alignment: {this.state.alignment}</td> 
              <td>Affiliation: {this.state.affiliation}</td> 
              <td>Occupation: {this.state.occupation}</td>
              </table>
          </div>
      }
}