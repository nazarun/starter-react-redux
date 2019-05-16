import * as React from 'react';
import FamiliarizWordCard from './FamiliarizWordCard';

class Familiarization extends React.Component {
    state = {
        wordsToLearn: [
        { id: 1, word: 'beauty', translation: 'something nice', img: 'src' },
        { id: 2, word: 'energy', translation: 'physics pozacnennza', img: 'some2@e-mail.com' },
        { id: 3, word: 'apple', translation: 'lalala', img: 'some3@e-mail.com' },
        { id: 4, word: 'sun', translation: 'gafafafa', img: 'some4@e-mail.com' }
        ]
      };    

    render() {
        return (
          <div id="familiarization">
            <h3>Take a quick look at that new words</h3>
            <div> 
           {this.state.wordsToLearn.map((item, index) => (<span key={index}>{item.word} </span>))}
        </div> 
              <FamiliarizWordCard />
          </div>
        );
      }
    
    }
    
export default Familiarization;