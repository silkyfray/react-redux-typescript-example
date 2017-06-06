import * as React from 'react'
import { connect } from "react-redux"
import * as Axios from "axios"

import SubmitDesignForm from "../SubmitDesignForm"
import * as api from "../../middleware/apiRequests"

class SubmitDesignPage extends React.Component<any, any> {

    componentDidMount() {
        let designId = this.props.match.params.designId;
        if(designId) {
            console.log("we are modifying a design")
            // fire off an action to fill the state controlling the form
            this.props.dispatch(api.readDesign(designId));
            
        } else {
            console.log("we are making a new design")
        }
    }
        submitDesign(values) {
        let { url, title, description } = values;
        // make server call
        // Axios.post(apiEndpoints.kApiSubmitDesign, { designUrl: url, title, description })
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });          
    }

    render() {
        return (
            <div>
                <SubmitDesignForm onSubmit={this.submitDesign}/>
            </div>
        )
    }
}

export default connect()(SubmitDesignPage);
