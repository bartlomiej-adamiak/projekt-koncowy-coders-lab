import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
          <div className="logo">
          <span>Superhero battle arena</span>
          </div>
          <ul className="nav__header">
              <li className="nav__header--element">interdimensional superhero olympics</li>
              <li className="nav__header--element">who would win?</li>
              <li className="nav__header--element">choose your type and check if you are right!</li>
           </ul>
           </div>
    )
  }
}
