import React from 'react'
import PropTypes from 'prop-types'
import './builderComponent.css'

BuilderComponent.propTypes = {
    render: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
}

function BuilderComponent(props) {
    const { position, update, remove } = props
    return (
        <div className="builder-component">
            <div className="builder-component__remove" onClick={remove}>X</div>
            {props.render({ update, position })}
        </div>
    )
}

export default BuilderComponent
