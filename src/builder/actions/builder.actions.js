export const addPage = () => ({
    type: 'ADD_PAGE',
    payload: {
        id: Date.now(),
    },
})

export const goToPreviousPage = number => ({
    type: 'GO_TO_PREVIOUS_PAGE',
    payload: {
        number,
    },
})

export const goToNextPage = number => ({
    type: 'GO_TO_NEXT_PAGE',
    payload: {
        number,
    },
})
