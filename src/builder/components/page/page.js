import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './page.css'
import { addComponent, updateComponent } from '../../actions/page.actions'
import PageTitle from '../pageTitle/pageTitle'
import ComponentSelector from '../componentSelector/componentSelector'
import BuilderComponent from '../builderComponent/builderComponent'
import TextBuilder from '../../mediaElements/textBuilder/textBuilder'
import QuestionBuilder from '../../mediaElements/questionBuilder/questionBuilder'
import KnowledgeCheckBuilder from '../../mediaElements/knowledgeCheckBuilder/knowledgeCheckBuilder'

class Page extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        number: PropTypes.number.isRequired,
        components: PropTypes.array,
        addComponent: PropTypes.func.isRequired,
        updateComponent: PropTypes.func.isRequired,
    }

    static defaultProps = {
        name: '',
        components: [],
    }

    getComponent(type, props) {
        switch(type) {
            case 'text':
                return <TextBuilder {...props} />
            case 'openQuestion':
                return <QuestionBuilder {...props} />
            case 'knowledgeCheck':
                return <KnowledgeCheckBuilder {...props} />
            default:
                return null
        }
    }

    addComponent = (type) => {
        this.props.addComponent({ pageId:this.props.id, type })
    }

    updateComponent = (config, position) => {
        this.props.updateComponent({ pageId:this.props.id, position, config })
    }

    removeComponent = (index) => {
        console.log(index)
    }

    render() {
        let { name, number, components } = this.props

        return (
            <div className="page">
                <PageTitle className="page__title" title={name} number={number} />
                <div className="page__content">
                    {components.map((component, index) => (
                        <BuilderComponent
                            key={component.id}
                            position={index}
                            remove={this.removeComponent}
                            update={this.updateComponent}
                            render={(props) => (
                                this.getComponent( component.type, { config:component.config, ...props })
                            )}
                        />
                    ))}
                </div>
                <ComponentSelector add={this.addComponent} />
            </div>
        )
    }
}

export default connect(null, {
    addComponent,
    updateComponent,
})(Page)
