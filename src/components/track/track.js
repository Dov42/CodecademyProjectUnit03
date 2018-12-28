//this will be a class to reperesent a single Track
import React from 'react';
import './track.css';


class Track extends React.Component{
  renderAction(isRemoval){
    const action = isRemoval?  "-" :  "+";
    return action
  }
  render(){
      return(
        <div className="Track">
          <div className="Track-information">
          {console.log('in track.js',this.props.id)}
            <h3>name here{this.props.name}{this.props.id}</h3>
            <p>Britney Spears | Oops!... I Did It Again</p>
          </div>
          <a className="Track-action">{this.rednerAction}</a>
        </div>
    );
  }
};

export default Track;
