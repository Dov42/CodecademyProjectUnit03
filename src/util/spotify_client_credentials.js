/**
 * take from Spotify's example and tweaked to export the results
 */

   const Spotify  = {
      search(searchTerm) {
      console.log(`search term recieved in SpotifySearch is: `,searchTerm)
      let searchResults;
      var request = require('request'); // "Request" library

      var client_id = 'client_id'; // Your client id
      var client_secret = 'client_secret'; // Your secret

      const corsUrl = 'https://cors-anywhere.herokuapp.com/'
      const tokenUrl = 'https://accounts.spotify.com/api/token'


      //  application requests authorization
      var authOptions = {
        url: corsUrl + tokenUrl,
        headers: {
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
          grant_type: 'client_credentials'
        },
        json: true
      };


      request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        //structure the request from Spotify's API as a url
        const tokenUrl = 'https://api.spotify.com/v1/users/jmperezperez'
        const searchUrl = 'https://api.spotify.com/v1/search?q='
        const typeUrl = '&type=track%2Cartist%2Calbum'

        const urlToFetch = corsUrl + searchUrl + searchTerm + typeUrl //`https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&`;


        console.log(urlToFetch);
        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
          url: urlToFetch,
          headers: {'Authorization': 'Bearer ' + token},
          json: true
        };
        console.log(`get request is: `,options);

       //get the data from the web API

         request.get(options, function(error, response, body) {
              console.log('error',error)
              console.log('response',response && response.statusCode)
              console.log('body',body)
           let array = [];
          body.tracks.items.map(track => { //duplicates from body all the relevant track data to a new array.

              let trackDetails = {
                 id : track.id,
                 name : track.name,
                 popularity : track.popularity,
                 href : track.href,
                 album :track.album,
                 ablumName : track.album.name,
                 duration_ms: track.duration_ms,
                 artist: track.artists.name,
                 artistId: track.artists.id,
               }
             array.push(trackDetails);
           })
           console.log('reply is',array)
           return array
      })       //end of get request

   } // if error response
  });//if post

 }//search function

}//spotify

export default Spotify
