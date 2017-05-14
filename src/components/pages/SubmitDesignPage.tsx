import * as React from 'react'
import { connect } from "react-redux"
import { Field, reduxForm, formValueSelector } from 'redux-form'

import SubmitDesignForm from "../SubmitDesignForm"

interface ISubmitPageProps {
    urlInput?: string,
    titleInput?: string,
    descriptionMessage?:string
}

class SubmitDesignPage extends React.Component<any, any> {

    submitDesign() {
        console.log("Submit design");
    }
    render() {
        return (
            <div>
                <SubmitDesignForm/>
            </div>
        )
    }
}

function mapStateToProps(state: any):ISubmitPageProps {
    return state.form.submitDesign;
}

export default (SubmitDesignPage);
