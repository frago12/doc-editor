import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './pageTitle.css'

class PageTitle extends Component {
    static propTypes = {
        name: PropTypes.string,
        number: PropTypes.number.isRequired,
        className: PropTypes.string,
    }

    constructor(props) {
        super()
        this.state = {
            title: props.title,
        }
    }

    onChange = ({ target }) => {
        this.setState(state => ({ title: target.value }))
    }

    render() {
        const { className, number } = this.props
        return (
            <div className={`${className} page-title`}>
                <input
                    className="page-title__input"
                    type="text"
                    onChange={this.onChange}
                    placeholder={`Page ${number}`}
                    value={this.state.title}
                />
            </div>
        )
    }
}

export default PageTitle
