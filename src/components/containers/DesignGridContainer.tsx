import * as React from 'react'
import { connect } from "react-redux"

import * as apiRequests from "../../middleware/apiRequests"
import { AppState, ApprovalGridState } from "../../models/state"

import DesignThumbnail from "../stateless/DesignThumbnail"

interface IDesignGridStateProps {
    approvalState: ApprovalGridState
}

interface IDesignGridDispatchProps {
    readApprovals: () => void;
}

interface IDesignGridOwnProps {
    approval: boolean;
}

type IDesignGridProps = IDesignGridStateProps & IDesignGridDispatchProps & IDesignGridOwnProps;

function mapStateToProps(state: AppState) {
    let newProps = { approvalState: state.approval }
    return newProps;
}

function mapDispatchToProps(dispatch) {
    let readApprovals = (): void => dispatch(apiRequests.loadApprovalDesigns())
    let newProps = { readApprovals }
    return newProps;
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    let newProps = { ...stateProps, ...dispatchProps, ...ownProps };
    return newProps;
}

class DesignGridContainer extends React.Component<IDesignGridProps, any> {

    componentDidMount() {
        this.props.readApprovals();
    }

    render() {
        return <div className="DesignGrid">
            {this.props.approvalState &&
                this.props.approvalState.designs.map(function (design, key) {
                    let imageData = "data:image/jpg;base64," + design.imageData;
                    return <DesignThumbnail key={key} imageData={imageData} url={design.url}/>
                })
            }
        </div>
    }
}

export default connect<IDesignGridStateProps, IDesignGridDispatchProps, IDesignGridOwnProps, IDesignGridProps>
    (mapStateToProps, mapDispatchToProps, mergeProps)(DesignGridContainer);