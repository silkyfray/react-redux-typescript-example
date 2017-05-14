import * as React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import {connect} from "react-redux"
import Axios from "axios"

class SubmitDesignForm extends React.Component<any, any> {

    submitDesign() {
        let {url, title, description} = this.props;
        // make server call
        Axios.post("/api/design", {designUrl:url, title, description})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={(event) => {this.submitDesign(); event.preventDefault();}}>
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
                        <input className="button-primary" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

let X = reduxForm({
    form: "submitDesign"
})(SubmitDesignForm);

const selector = formValueSelector('submitDesign') // <-- same as form name

export default connect<any, any, any>(
  state => {
    return {
        "url": selector(state, "url"),
        "title": selector(state, "title"),
        "description": selector(state, "description")
    }
  }
)(X)

