import MovieInput from '../components/MovieInput';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux'
import {fetchCurrentScript} from '../reducers/movie' 
import sentiment from 'sentiment'
import { emotinator, validateSong, sentiMentator } from "../utils";

const mapstate = (state) => {
  let movieArray = state.movies.linksAndTitles
  let currentScript = state.movies.currentMovieScript
  let [emotionObject, emotionCount] = emotinator(currentScript)
  let sentimentObject =  sentiMentator(sentiment(currentScript))

  return {
    movieArray,
    sentimentObject,
    emotionObject,
    emotionCount,
    currentScript,
  }
}

const mapDisptachToProps = (dispatch,ownProps) => {
  return {
     analyzeMovieScript (e) {
      e.preventDefault()
      return dispatch(fetchCurrentScript(e.target.movieScript.value))
    }
  }
}

export default connect(mapstate, mapDisptachToProps)(MovieInput);


