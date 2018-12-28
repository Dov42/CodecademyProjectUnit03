import React from 'react';
import './results.css';
import TrackList from '../tracklist/tracklist.js';

class Results extends React.Component{

  render(){
    return (
        <div className="SearchResults">
            <h2>Results</h2>
                <TrackList tracks={this.props.searchResults}/>
                {console.log('in results.js:',this.props.searchResults)}
        </div>

    );
  }
};

export default Results;
