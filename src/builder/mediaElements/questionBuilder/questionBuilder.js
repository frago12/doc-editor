import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Editor, EditorState, ContentState } from 'draft-js'
import './questionBuilder.css'

class QuestionBuilder extends Component {
    static propTypes = {
        update: PropTypes.func.isRequired,
        position: PropTypes.number.isRequired,
        config: PropTypes.shape({
            value: PropTypes.string,
        }),
    }

    constructor(props) {
        super()
        const initialText = props.config.value || ''
        const contentState = ContentState.createFromText(initialText)
        this.state = {
            editorState: EditorState.createWithContent(contentState),
        }
    }

    componentDidMount() {
        this.element.focus()
    }

    onChange = (editorState) => {
        this.setState(state => ({ editorState }))
    }

    onBlur = () => {
        const contentState = this.state.editorState.getCurrentContent()
        const config = {
            value: contentState.getPlainText(),
        }
        this.props.update(config, this.props.position)
    }

    render() {
        return(
            <div className="question-builder">
                <Editor
                    editorState={this.state.editorState}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    placeholder="What do you want to ask?"
                    ref={element => this.element = element}
                />
                <textarea className="question-builder__input" />
            </div>
        )
    }
}

export default QuestionBuilder
