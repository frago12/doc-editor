import React, { Component } from 'react'
import { Editor, EditorState } from 'draft-js'
import './knowledgeCheckBuilder.css'

class KnowledgeCheckBuilder extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        answers: [
            { id: 1, value: '', correct: true },
            { id: 2, value: '', correct: false },
            { id: 3, value: '', correct: false },
        ],
    }

    componentDidMount() {
        this.element.focus()
    }

    onChange = (editorState) => {
        this.setState(state => ({ editorState }))
    }

    onChangeRadio = (selectedIndex) => {
        let newAnswers = this.state.answers.map((answer, index) => {
            if (selectedIndex === index) return { ...answer, correct: true }
            return { ...answer, correct: false }
        })
        this.setState(state => ({ answers: newAnswers }))
    }

    onChangeInput = (selectedIndex) => ({ target }) => {
        let newAnswers = this.state.answers.map((answer, index) => {
            if (selectedIndex !== index) return answer
            return { ...answer, value: target.value }
        })
        this.setState(state => ({ answers: newAnswers }))
    }

    render() {
        return(
            <div className="kc-builder">
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    placeholder="What do you want to ask?"
                    ref={element => this.element = element}
                />
                <div className="kc-builder__answers">
                    {this.state.answers.map((answer, index) => (
                        <div className="kc-builder__item" key={answer.id}>
                            <input
                                type="radio"
                                value={answer.id}
                                checked={answer.correct}
                                onChange={() => this.onChangeRadio(index)}
                            />
                            <input
                                type="text"
                                placeholder="write an answer"
                                onChange={this.onChangeInput(index)}
                                value={answer.value}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default KnowledgeCheckBuilder
