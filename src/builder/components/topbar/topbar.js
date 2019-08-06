// @flow
import React, {Component} from 'react'
import './topbar.css'
import appsIcon from './assets/apps.svg'

type Props = {
    docName: string,
    publish: Function,
};

type State = {
    name: string,
};

class Topbar extends Component<Props, State> {
    constructor(props: Props) {
        super()
        this.state = {
            name: props.docName || '',
        }
    }

    onChangeName = ({ target }: {target: Object}) => {
        this.setState(prevState => ({ name: target.value }))
    }

    render() {
        return (
            <div className="topbar">
                <div className="topbar__apps">
                    <img src={appsIcon} className="topbar__apps-icon" alt="" />
                </div>
                <input
                    className="topbar__input"
                    onChange={this.onChangeName}
                    placeholder="Untitle doc"
                    type="text"
                    value={this.state.name}
                />
                <button className="topbar__publish" onClick={this.props.publish}>publish</button>
            </div>
        )
    }
}

export default Topbar
