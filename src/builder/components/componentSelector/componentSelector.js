import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './componentSelector.css'

const componentTypes = [
    { id: 1, type: 'text', label: 'T' },
    { id: 2, type: 'openQuestion', label: 'O' },
    { id: 3, type: 'knowledgeCheck', label: 'K' },
]

class ComponentSelector extends Component {
    static propTypes = {
        add: PropTypes.func.isRequired,
        isOpen: PropTypes.bool,
    }

    static defaultProps = {
        isOpen: false,
    }

    constructor(props) {
        super()
        this.state = {
            isOpen: props.isOpen,
        }
    }

    toggleSelectors = () => {
        this.setState(state => ({ isOpen: !state.isOpen }))
    }

    onClickComponent = (type) => {
        this.props.add(type)
        this.setState(state => ({ isOpen: !state.isOpen }))
    }

    render() {
        return(
            <div className={`component-selector ${this.state.isOpen ? 'isOpen' : ''}`}>
                <button
                    className="component-selector__button component-selector__toggle"
                    onClick={this.toggleSelectors}
                >
                    {'+'}
                </button>
                <div className="component-selector__list">
                    {componentTypes.map(component => (
                        <button
                            key={component.id}
                            className="component-selector__button component-selector__item"
                            onClick={() => this.onClickComponent(component.type)}
                        >
                            {component.label}
                        </button>
                    ))}
                </div>
            </div>
        )
    }
}

export default ComponentSelector
