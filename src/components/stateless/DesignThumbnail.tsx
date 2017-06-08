import * as React from "react"
import { IDesignData } from "../../models/state"

interface DesignThumbnailProps {
    design: IDesignData;
    onClick(designId: string): void;
}

class DesignThumbnail extends React.Component<DesignThumbnailProps, any> {

    callbackFn () {
        this.props.onClick(this.props.design._id);
    } 
    render() {
        let imageData = "data:image/jpg;base64," + this.props.design.imageData;

        return (<a className="DesignItem" onClick={this.callbackFn.bind(this)} style={{ cursor: 'pointer' }}>
            <img src={imageData} />
            <div>{this.props.design.url}</div>
        </a>)
    }

}

export default DesignThumbnail;