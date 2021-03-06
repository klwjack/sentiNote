import JournalInput from '../components/JournalInput';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { addEntry } from '../reducers/entry';
import { setTranscript } from '../reducers/transcription';
import sentiment from 'sentiment';
import { emotinator, validateJournal, sentiMentator, bayesinator } from "../utils";


let title, content, user, sentimentObject, emotionObject, emotionCount

const mapstate = (state) => {
  title =  state.form.journalForm ? state.form.journalForm.values ? state.form.journalForm.values.title ? state.form.journalForm.values.title : '' : '' : ''
  content =   state.transcription ? state.transcription : '';
  user =   state.auth.user
  console.log('about to perform emotinator on ', content);
  let emotionReturn = emotinator(content);
  emotionObject = emotionReturn[0];
  emotionCount = emotionReturn[1];

  sentimentObject =  sentiMentator( sentiment(content) , 'journal' );
  let teachDocs = state.teachDoc.allTeachDocs
  let [smartObject] = bayesinator(teachDocs, content)

  return {
    title,
    content,
    user,
    sentimentObject,
    emotionObject,
    emotionCount,
    smartObject,
    transcript: state.transcription,
    alertShow: false
  }
}

const mapDisptachToProps = (dispatch, ownProps) => {
  return {
     addEntry (e) {
      e.preventDefault()
      dispatch(addEntry({title,content,sent:sentimentObject,emotion:emotionObject,user_id:user.id}))
      dispatch(reset('journalForm'))
      window.location.replace('/home')
    },
    onChangePostText: (event) => {
      console.log('text is being changed');
      dispatch(setTranscript(event.target.value))
    },

  }
}

const JournalForm = reduxForm({
  form: 'journalForm',
  validateJournal
})(JournalInput)

export default connect(mapstate, mapDisptachToProps)(JournalForm);


