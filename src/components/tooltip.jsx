import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

export class Tooltip extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lore: "",
            alignment: "",
            affiliation: "",
            occupation: ""

        }

      }

      componentDidMount() {

        axios.get(`http://superheroapi.com/api/2013413738718394/${id}`)
        .then((res)=> {
        console.log(res)
        this.setState({
        lore: res.data.biography.publisher,
        alignment: res.data.biography.alignment,
        affiliation: res.data.connections["group-affiliation"],
        occupation: res.data.work.occupation
           })
         })
        }

        render() {
            return <div className="tooltip">
                <span>Universe: {this.state.lore}</span>
                <span>Alignment: {this.state.alignment}</span>
                <span>Affiliation: {this.state.affiliation}</span>
                <span>Occupation: {this.state.occupation}</span>
            </div>
        }
    }