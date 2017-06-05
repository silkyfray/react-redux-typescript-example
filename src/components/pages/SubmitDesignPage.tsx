import * as React from 'react'
import { connect } from "react-redux"
import { Field, reduxForm, formValueSelector } from 'redux-form'

import SubmitDesignForm from "../SubmitDesignForm"


class SubmitDesignPage extends React.Component<any, any> {

    componentDidMount() {
        let designId = this.props.match.params.designId;
        if(designId) {
            console.log("we are modifying a design")
            
        } else {
            console.log("we are making a new design")
        }
    }
    render() {
        return (
            <div>
                <SubmitDesignForm/>
            </div>
        )
    }
}

export default (SubmitDesignPage);
