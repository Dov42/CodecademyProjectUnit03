import React from 'react';
import './tracklist.css';
import Track from '../track/track.js';


class TrackList extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      trackList : [],
    };

  };

  resetTrackList(){
    this.setState({trackList: []})
  }

  updateTrackList(track){
    const array = this.state.trackList;
    this.setState({ trackList : array.push(track)});
  }



  render(){
      return(
         <div className="TrackList">
      

           {this.props.tracks.map(track =>{
               return(
                 <Track key={track.id} trackName={track.name}/>
               )
            })
          }
        </div>
      );
  }
}
export default TrackList;
