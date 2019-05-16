import * as React from 'react';
import ListOfWords from './ListOfWords';
import Familiarization from './Familiarization';
import { connect } from 'react-redux';
import { getAllWords } from '../../actions/add';


class MainPage extends React.Component { 
  constructor (props) {
    super(props);
    console.log(this.props.words)
  }

  // componentDidMount () {
  //   this.props.getAllWords();
  // }
  
  render() {
    return (
      <div>              
        <ListOfWords wordsToLearn={this.props.words}/>
        <Familiarization />
      </div>

    );
  }

}

const mapStateToProps = state => ({
  words: getAllWords(state.words)
})

// const mapDispatchToProps = dispatch => ({
//   getAllWords: () => dispatch(getAllWords())
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(MainPage)
 
