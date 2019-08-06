import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './navigator.css'
import { addPage, goToPreviousPage, goToNextPage } from '../../actions/builder.actions'

Navigator.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.arrayOf(PropTypes.number).isRequired,
    addPage: PropTypes.func.isRequired,
    goToPreviousPage: PropTypes.func.isRequired,
    goToNextPage: PropTypes.func.isRequired,
}

function Navigator({ goToPreviousPage, goToNextPage, addPage }) {
    return(
        <div className="navigator">
            <div className="navigator__options">
                <div className="navigator__item" onClick={() => goToPreviousPage()}>{'<'}</div>
                <div className="navigator__item" onClick={() => goToNextPage()}>{'>'}</div>
                <div className="navigator__item" onClick={() => addPage()}>{'+'}</div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ doc }) => ({
    currentPage: doc.currentPage,
    pages: doc.pages,
})

export default connect(mapStateToProps, {
    addPage,
    goToPreviousPage,
    goToNextPage,
})(Navigator)
