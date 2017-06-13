import * as React from 'react'
import { push } from "react-router-redux"
import { connect } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import InfiniteScoller from "redux-infinite-scroll"
import * as Notifications from 'react-notification-system-redux';

import { AppState } from "../../models/state"

class MainContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const { notifications } = this.props;
        return (
            <div>
                {/*Top toolbar*/}
                <nav className="TopNav">
                    <h5 className="Heading"><Link to="/catalog">Beautiful Designs</Link></h5>
                    <ul>
                        <li><NavLink to="/catalog" activeClassName="ActiveLink">Catalog</NavLink></li>
                        <li><NavLink to="/submit" activeClassName="ActiveLink">Submit</NavLink></li>
                        <li><NavLink to="/approval" activeClassName="ActiveLink">Approve</NavLink></li>
                    </ul>
                </nav>
                {this.props.children}
                <Notifications notifications={notifications} />
            </div>
        )
    }
}

export default connect<any, any, any>(state => ({ notifications: state.notifications }))(MainContainer);