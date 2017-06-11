import * as React from 'react'
import { connect } from "react-redux"

import * as api from "../../middleware/apiRequests"
import * as state from "../../models/state"

interface IDesignViewStateProps {
    design: state.IDesignData;
}

type IDesignViewProps = IDesignViewStateProps;


class DesignViewPage extends React.Component<any, any> {
    componentDidMount() {
        let designId = this.props.match.params.designId;
        // fire off request to load the design
        this.props.dispatch(api.readDesign(designId));
    }

    render() {
        let design = this.props.design as state.IDesignData;
        let imageData = "data:image/*;base64," + design.imageData;

        return (
            <div>
                <h3>{design.title}</h3>
                <a className="DesignItem" href={design.url} style={{ cursor: 'pointer' }}>
                    <img src={imageData} />
                </a>
                <a href={design.url}>{design.url}</a>
                <p>{design.description}</p>
            </div>
        )

    }
}

function mapStateToProps(state: state.AppState, ownProps: any) {
    return { design: state.loadedDesign };
}

export default connect(mapStateToProps)(DesignViewPage);
