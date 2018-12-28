import React from 'react';
import './searchBar.css';


const sortByOptions= {
  'Best Match'    : 'best_match',     /// api Name: sort_by
  'Highest Rated' : 'rating',         /// api Name: sort_by
  'Most Reviewed' : 'review_count'    /// api Name: sort_by
};

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ""
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(e){
    console.log('in term change section')
    this.setState({searchTerm: e.target.value});
  //  console.log(e.target.value)
  }
  handleSearch(e){
    this.props.searchSpotify(this.state.searchTerm);
    e.preventDefault();
  }

  render(){
      return(
        <div className="SearchBar">
              <input onChange = {this.handleTermChange} placeholder="Enter A Song Title" />
              <a onClick = {this.handleSearch}>SEARCH</a>
        </div>
    );
  }
};

export default SearchBar;
