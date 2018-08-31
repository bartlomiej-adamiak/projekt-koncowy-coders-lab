import React from 'react';
import ReactDOM from 'react-dom';

export class FightingSystem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          hero: "",
          foe: "",
          selected: ""
        }
   
      }

    static getDerivedStateFromProps(props, state){

        // console.log("test", props, state);

        if(state !== props) {
            return {
                hero: props.data1,
                foe: props.data2,
                selected: props.selected,
                // playerPoints: props.points
            }
        }

        return state;

          
           
      } 
    

    render() {

        if(this.state.hero && this.state.foe) {

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

            let heroPoints = Number(this.state.hero.powerstats.strength) + Number(this.state.hero.powerstats.intelligence) + Number(this.state.hero.powerstats.speed) + Number(this.state.hero.powerstats.power) + Number(this.state.hero.powerstats.durability) + Number(this.state.hero.powerstats.combat);
            
            let foePoints = Number(this.state.foe.powerstats.strength) + Number(this.state.foe.powerstats.intelligence) + Number(this.state.foe.powerstats.speed) + Number(this.state.foe.powerstats.power) + Number(this.state.foe.powerstats.durability) + Number(this.state.foe.powerstats.combat);

            if (heroPoints > foePoints && this.state.selected == this.state.hero.name) {
                return  <div class="fight">
                        You're right!
                        </div>
            } else if (heroPoints > foePoints && this.state.selected == this.state.foe.name) {
                return  <div class="fight">
                        OH NO! You're wrong! <span className="strongerOne">{this.state.hero.name}</span> is more powerful!
                        </div>
            } else if (foePoints > heroPoints && this.state.selected == this.state.foe.name) {
                return  <div class="fight">
                        You're right!
                        </div>
            } else if (foePoints > heroPoints && this.state.selected == this.state.hero.name) {
                return <div class="fight">
                        OH NO! You're wrong! <span className="strongerOne">{this.state.foe.name}</span> is more powerful!
                        </div>
            } else {
                return <div class="fight">Who would win?</div>
            }
        }

        return <div class="fight">Wait for it...</div>
        
        
    }

}