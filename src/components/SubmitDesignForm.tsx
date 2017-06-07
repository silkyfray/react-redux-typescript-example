import * as React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from "react-redux"

import * as state from "../models/state"

class SubmitDesignForm extends React.Component<any, any> {
    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit} className="container">
                    <div className="row">
                        <div className="six columns">
                            <label htmlFor="url">Website Url</label>
                            <Field component="input" className="u-full-width" type="text" placeholder="www.beautifuldesign.com" name="url" />
                        </div>
                        <div className="six columns">
                            <label htmlFor="title">Title</label>
                            <Field component="input" className="u-full-width" type="text" placeholder="Beautiful Design" name="title" />
                        </div>
                    </div>
                    <label htmlFor="description">Short Description</label>
                    <Field component="textarea" className="u-full-width" placeholder="A modern, clean b2b website..." name="description" />
                    <button className="button-primary" type="submit"> Submit</button>
                </form>
            </div>
        )
    }
}

let ConnectedSubmitDesignForm = reduxForm({
    form: "submitDesign",
    enableReinitialize : true
})(SubmitDesignForm);

// The values should be in the form { field1: 'value1', field2: 'value2' } i.e a Field in the form with <name> should have a key in the dictionary with <name>
function mapStateToProps(state: state.AppState, ownProps: any) {
    let initialProps = {
        initialValues: {
            "url": state.designForm.url,
            "title": state.designForm.title,
            "description": state.designForm.description,
        }
    }
    return initialProps;
}

export default connect<any, any, any>(
    mapStateToProps
)(ConnectedSubmitDesignForm)
