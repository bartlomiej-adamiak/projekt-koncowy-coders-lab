import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

let defaults = require('../images/superhero-default-img.png');

export class Hero extends React.Component {
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

        if(props.data1 && props.data1 !== state.data) {

          return { 
          name: props.data1.name,
          image: props.data1.image.url,
          strength: props.data1.powerstats.strength,
          intelligence: props.data1.powerstats.intelligence,
          speed: props.data1.powerstats.speed,
          power: props.data1.powerstats.power,
          durability: props.data1.powerstats.durability,
          combat: props.data1.powerstats.combat,
          lore: props.data1.biography.publisher,
          alignment: props.data1.biography.alignment,
          affiliation: props.data1.connections["group-affiliation"],
          occupation: props.data1.work.occupation,
          data: props.data1
          
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
          return <div className="hero">
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