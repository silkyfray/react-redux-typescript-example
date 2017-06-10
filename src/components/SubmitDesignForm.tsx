import * as React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from "react-redux"
import * as Dropzone from "react-dropzone"

import * as state from "../models/state"


class ImageHolder extends React.Component<any, any> {
    onFileChange() {
        var file = (this.refs.file as any).files[0];
        var reader = new FileReader();

        reader.onloadend = (e) => {
            let imageData = reader.result.substring(reader.result.indexOf(",") + 1);
            this.props.onImageChange(imageData);
        }

        reader.readAsDataURL(file);
    }
    render() {
        let imageData = "data:image/*;base64," + this.props.input.value;
        return (
            <div className="ImageHolder">
                <img src={imageData} />
                <input ref="file" type="file" multiple={false} onChange={this.onFileChange.bind(this)} />
            </div>
        )
    }
}


interface IDesignFormStateProps {
    initialValues: {};
}

interface IDesignFormOwnProps {
    onSubmit(values: any): void;
    handleImageChange(imageData: string): void;
    approveMode: boolean;
}

interface IDesignFormDispatchProps {
    handleSubmit(values: any): void;
}

type IDesignFormProps = IDesignFormStateProps & IDesignFormDispatchProps & IDesignFormOwnProps;

class SubmitDesignForm extends React.Component<IDesignFormProps, any> {
    render() {
        const { handleSubmit, handleImageChange, approveMode } = this.props;
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

                    <label htmlFor="websiteImage">Image</label>
                    <Field component={ImageHolder} className="u-full-width" name="websiteImage" onImageChange={handleImageChange} />

                    <label htmlFor="description">Short Description</label>
                    <Field component="textarea" className="u-full-width" placeholder="A modern, clean b2b website..." name="description" />
                    {approveMode && <div>
                        <label htmlFor="approved">
                            <Field name="approved" id="approved" component="input" type="checkbox" />
                            Approved
                        </label>
                    </div>}
                    <button className="button-primary" type="submit"> Submit</button>
                </form>
            </div>
        )
    }
}

let ConnectedSubmitDesignForm = reduxForm({
    form: "submitDesign",
    enableReinitialize: true
})(SubmitDesignForm);

// The values should be in the form { field1: 'value1', field2: 'value2' } i.e a Field in the form with <name> should have a key in the dictionary with <name>
function mapStateToProps(state: state.AppState): IDesignFormStateProps {
    let currFormValues = ((state.form || {}).submitDesign || {}).values;
    currFormValues = {...currFormValues};

    currFormValues.url = currFormValues.url || state.loadedDesign.url;
    currFormValues.title = currFormValues.title || state.loadedDesign.title;
    currFormValues.description = currFormValues.description || state.loadedDesign.description;
    let approved = state.loadedDesign.pending && !state.loadedDesign.pending;
    currFormValues.approved = currFormValues.approved || approved;
    currFormValues.websiteImage = state.loadedDesign.imageData;
    
    // remove undefined
    let initialProps = {
        initialValues: currFormValues
    }
    return initialProps;
}

export default connect<IDesignFormStateProps, IDesignFormDispatchProps, IDesignFormOwnProps>(
    mapStateToProps
)(ConnectedSubmitDesignForm)
