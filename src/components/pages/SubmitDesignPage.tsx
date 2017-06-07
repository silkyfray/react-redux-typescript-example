import * as React from 'react'
import { connect } from "react-redux"
import * as Axios from "axios"

import SubmitDesignForm from "../SubmitDesignForm"
import * as api from "../../middleware/apiRequests"
import * as state from "../../models/state"
import { IDesignData } from "../../models/requestInterface"

class SubmitDesignPage extends React.Component<any, any> {

    componentDidMount() {
        let designId = this.props.match.params.designId;
        if (designId) {
            console.log("we are modifying a design")
            // fire off an action to fill the state controlling the form
            this.props.dispatch(api.readDesign(designId));

        } else {
            console.log("we are making a new design")
        }
    }
    submitDesign(values) {
        let { url, title, description } = values;
        let newDesign: IDesignData = { ...this.props.design };
        newDesign.description = description;
        newDesign.title = title;

        this.props.dispatch(api.updateDesign(newDesign));
    }

    render() {
        return (
            <div>
                <SubmitDesignForm onSubmit={this.submitDesign.bind(this)} />
            </div>
        )
    }
}

function mapStateToProps(state: state.AppState, ownProps: any) {
    return {design: state.designForm};
}

export default connect(mapStateToProps)(SubmitDesignPage);
