import * as React from 'react'
import { connect } from "react-redux"
import InfiniteScoller from "redux-infinite-scroll"

import * as apiRequests from "../../middleware/apiRequests"
import { AppState, GridState } from "../../models/state"

import DesignThumbnail from "../stateless/DesignThumbnail"

interface IDesignGridStateProps {
    gridState: GridState
}

interface IDesignGridDispatchProps {
    readApprovals: () => void;
    readCatalog: () => void;
}

interface IDesignGridOwnProps {
    approval: boolean;
}

type IDesignGridProps = IDesignGridStateProps & IDesignGridDispatchProps & IDesignGridOwnProps;

function mapStateToProps(state: AppState) {
    let newProps = { gridState: state.grid }
    return newProps;
}

function mapDispatchToProps(dispatch) {
    let readApprovals = (): void => dispatch(apiRequests.loadDesigns(true));
    let readCatalog = (): void => dispatch(apiRequests.loadDesigns(false));
    let newProps = { readApprovals, readCatalog }
    return newProps;
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    let newProps = { ...stateProps, ...dispatchProps, ...ownProps };
    return newProps;
}

class DesignGridContainer extends React.Component<IDesignGridProps, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    loadMore() {
        console.log('loading More');
        this.props.approval ? this.props.readApprovals() : this.props.readCatalog(); 
    }

    createData() {
        let gridData = this.props.approval ? this.props.gridState.approval.data : this.props.gridState.catalog.data;
        return gridData.map(function (design, key) {
            let imageData = "data:image/jpg;base64," + design.imageData;
            return <DesignThumbnail key={key} imageData={imageData} url={design.url} />
        })
    }

    render() {
        let x = <InfiniteScoller
            className="DesignGrid"
            elementIsScrollable = {false}
            loadMore={this.loadMore.bind(this)}
            hasMore={this.props.approval ? this.props.gridState.approval.hasMore : this.props.gridState.catalog.hasMore}
            showLoader={false}
            threshold={400}
            items={this.createData()} />
        return x;
    }
}

export default connect<IDesignGridStateProps, IDesignGridDispatchProps, IDesignGridOwnProps, IDesignGridProps>
    (mapStateToProps, mapDispatchToProps, mergeProps)(DesignGridContainer);