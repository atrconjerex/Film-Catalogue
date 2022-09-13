import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {

  componentDidMount(){
    this.props.getMovieDetail(this.props.match.params.id)
  }

    render() {
        return (
            <div className="movie-detail">
                <h3>{this.props.movie.Title}</h3>
                <h5>{this.props.movie.Genre}</h5>
                <h5>{this.props.movie.Year}</h5>
                <h5>{this.props.movie.Runtime}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetail
  }  
}


export default connect(mapStateToProps, {getMovieDetail})(Movie);