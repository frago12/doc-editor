const addPage = (state, { id }) => ({
    ...state,
    [id]: { id, name: '', components: [] },
})

const removePage = (state, { id }) => {
    delete state[id]
    return { ...state }
}

const updateName = (state, { pageId, name }) => {
    const page = { ...state[pageId], name }
    return {
        ...state,
        [pageId]: page,
    }
}

const addComponent = (state, {id, pageId, type, config }) => {
    const page = state[pageId]
    const component = { id, type, config }
    return {
        ...state,
        [pageId]: {
            ...page,
            components: page.components.concat(component),
        },
    }
}

const updateComponent = (state, {pageId, position, config}) => {
    const page = state[pageId]
    const component = { ...page.components[position], config }
    return {
        ...state,
        [pageId]: {
            ...page,
            components: [
                ...page.components.slice(0, position),
                component,
                ...page.components.slice(position + 1),
            ],
        },
    }
}

const removeComponent = (state, { pageId, position }) => {
    const page = state[pageId]
    return {
        ...state,
        [pageId]: {
            ...page,
            components: [
                ...page.components.slice(0, position),
                ...page.components.slice(position + 1),
            ],
        },
    }
}

/*
* State example:
* { [pageId]: {name: '', components: []} }
*/
export default (state={}, {type, payload}) => {
    switch(type) {
        case 'ADD_PAGE': return addPage(state, payload)
        case 'REMOVE_PAGE': return removePage(state, payload)
        case 'UPDATE_NAME': return updateName(state, payload)
        case 'ADD_COMPONENT': return addComponent(state, payload)
        case 'UPDATE_COMPONENT': return updateComponent(state, payload)
        case 'REMOVE_COMPONENT': return removeComponent(state, payload)
        default: return state
    }
}
