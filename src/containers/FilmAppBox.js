import React, {Component} from 'react';
import FilmList from '../components/FilmList';

class FilmAppBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id:1, name:'Coco', imdb:8.5, release: 2017},
        {id:2, name:'WALL-E', imdb:8.4, release: 2008},
        {id:3, name:'Toy Story', imdb:8.3, release: 1995},
        {id:4, name:'Up', imdb:8.3, release: 2009},
        {id:5, name:'Toy Story 3', imdb:8.3, release: 2010}
      ]
    }
  }

  render() {
    return (
      <div className="film-list">
        <FilmList data={this.state.data}/>
      </div>
    )
  }
}

export default FilmAppBox;
