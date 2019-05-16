

export const addWord = text => ({
    type: 'ADD_TODO',
    id: text.wordsToLearn + 1    
})

export const getAllWords = (state) => ({
    type: 'GET_ALL_WORDS',
    words: state,   
})

// export const addTodo = text => ({
//     type: 'ADD_TODO',
//     id: text.wordsToLearn + 1    
// })