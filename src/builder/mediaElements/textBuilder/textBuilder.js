import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Editor, EditorState, ContentState } from 'draft-js'

class TextBuilder extends Component {
    static propTypes = {
        update: PropTypes.func.isRequired,
        position: PropTypes.number.isRequired,
        config: PropTypes.shape({
            value: PropTypes.string,
        }),
    }

    static defaultProps = {
        config: {},
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
            <div className="text-builder">
                <Editor
                    editorState={this.state.editorState}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    placeholder="Insert some text..."
                    ref={element => this.element = element}
                />
            </div>
        )
    }
}

export default TextBuilder
