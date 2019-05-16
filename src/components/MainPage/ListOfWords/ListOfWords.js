import * as React from 'react';


class ListOfWords extends React.Component { 
  constructor(props){
    super(props);
    console.log(props);
  }


  
    render() {
      
        return (          
          <div className="listOfWords">
            <input type="text" />
            <button>Add word</button>
            <h3>List of words to learn !!!</h3>
            <ul> {this.props.wordsToLearn.words.map((item, index) => (
                <li key={index}> {item.id} {item.word} </li>
              ))}
            </ul>        
          </div>
        );
      }    
    }
    
    export default ListOfWords;