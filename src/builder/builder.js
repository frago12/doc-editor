// @flow
import React from 'react'
import { connect } from 'react-redux'
import './builder.css'
import { addPage } from './actions/builder.actions'
import Topbar from './components/topbar/topbar'
import Page from './components/page/page'
import Navigator from './components/navigator/navigator'

type Props = {
    doc: {
        pages: Array<number>,
        currentPage: number,
        name: string,
    },
    pages: {
        [pageId: number]: {
            id: number,
            name: string,
            components: Array<{}>,
        },
    },
    addPage: Function,
};

class Builder extends React.Component<Props> {
    componentDidMount() {
        this.props.addPage()
    }

    getCurrentPage() {
        const { doc, pages } = this.props

        if (doc.pages.length === 0) return null

        const pageId = doc.pages[doc.currentPage - 1]
        const page = pages[pageId]
        return (
            <Page
                id={page.id}
                name={page.name}
                components={page.components}
                number={doc.currentPage}
            />
        )
    }

    publish = () => {
        // publish doc
    }

    render() {
        let { doc } = this.props
        return (
            <div className="builder">
                <Topbar docName={doc.name} publish={this.publish} />
                <div className="builder__page-wrapper">
                    {this.getCurrentPage()}
                </div>
                <Navigator />
            </div>
        )
    }
}

const mapStateToProps = ({ doc, pages }) => ({
    doc,
    pages,
})

export default connect(mapStateToProps, {
    addPage,
})(Builder)
