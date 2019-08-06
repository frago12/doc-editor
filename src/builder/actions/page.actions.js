export const addComponent = ({ pageId, type, config={} }) => ({
    type: 'ADD_COMPONENT',
    payload: {
        id: Date.now(),
        pageId,
        type,
        config,
    },
})

export const updateComponent = ({ pageId, position, config={} }) => ({
    type: 'UPDATE_COMPONENT',
    payload: {
        pageId,
        position,
        config,
    },
})
