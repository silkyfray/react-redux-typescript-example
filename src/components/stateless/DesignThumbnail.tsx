import * as React from "react"

interface DesignThumbnailProps {
    imageData: string;
    url: string;
}

let DesignThumbnail: React.StatelessComponent<DesignThumbnailProps> = (props) => {
    return (<div className="DesignItem">
        <img src={props.imageData} />
        <div>{props.url}</div>
    </div>)
}

export default DesignThumbnail;