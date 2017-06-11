import * as React from 'react'
import { push } from "react-router-redux"
import { connect } from "react-redux"
import {NavLink, Link} from "react-router-dom"
import InfiniteScoller from "redux-infinite-scroll"

import { AppState } from "../../models/state"

interface IDesignGridStateProps {
}

interface IDesignGridDispatchProps {
}

interface IDesignGridOwnProps {
}

type IDesignGridProps = IDesignGridStateProps & IDesignGridDispatchProps & IDesignGridOwnProps;

// function mapStateToProps(state: AppState, ownProps: IDesignGridOwnProps) {
//     let newProps = { gridState: ownProps.approval ? state.grid.approval : state.grid.catalog }
//     return newProps;
// }

// function mapDispatchToProps(dispatch, ownProps: IDesignGridOwnProps) {
//     let readDesigns = (): void => dispatch(apiRequests.loadDesigns(ownProps.approval));

//     let onClickHandler = (designId: string) : void => {
//         let callbackUrlBase = ownProps.approval ? "submit" : "design";
//         console.log("hi", designId);
//         dispatch(push("/" + callbackUrlBase + "/" + designId));
//     }

//     let newProps = { readDesigns, onClickHandler }
//     return newProps;
// }

// function mergeProps(stateProps, dispatchProps, ownProps) {
//     let newProps = { ...stateProps, ...dispatchProps, ...ownProps };
//     return newProps;
// }

class MainContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
 
    render() {
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
            </div>
        )
    }
}

export default connect()(MainContainer);