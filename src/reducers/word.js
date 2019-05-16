const words = (state=[], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            word: action.word            
          }
        ]
      
      default:
        return state
    }
  }
  
  export default words