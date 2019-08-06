const defaultState = {
    id: 123,
    name: '',
    pages: [],
    currentPage: 1,
}

const setName = (state, { name }) => ({
    ...state,
    name,
})

const addPage = (state, { id }) => ({
    ...state,
    pages: state.pages.concat(id),
    currentPage: state.pages.length + 1,
})

const removePageByNumber = (state, { number }) => ({
    ...state,
    pages: [
        ...state.pages.slice(0, number),
        ...state.pages.slice(number + 1),
    ],
})

const goToPreviousPage = (state) => {
    let number = state.currentPage - 1
    if (number < 1) number = 1
    return {
        ...state,
        currentPage: number,
    }
}

const goToNextPage = (state) => {
    let number = state.currentPage + 1
    const numberOfPages = state.pages.length
    if (number > numberOfPages) number = numberOfPages
    return {
        ...state,
        currentPage: number,
    }
}

export default (state=defaultState, {type, payload}) => {
    switch(type) {
        case 'UPDATE_NAME': return setName(state, payload)
        case 'ADD_PAGE': return addPage(state, payload)
        case 'REMOVE_PAGE': return removePageByNumber(state, payload)
        case 'GO_TO_PREVIOUS_PAGE': return goToPreviousPage(state, payload)
        case 'GO_TO_NEXT_PAGE': return goToNextPage(state, payload)
        default: return state
    }
}
