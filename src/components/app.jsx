import React, { Component} from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }

    this.search("disney"); // simulate
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    // TODO: API call
    giphy('iTPQd2j6GlOVNwUtXLezF8kJJgdncMkb').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      // console.log(result);
      this.setState({
        gifs: result.data
      });
    });
  }


  render() {
    const gifs = [
      {id: "jphoYA1FzGRTkrc0mM"},
      {id: "l0MYEqEzwMWFCg8rm"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
