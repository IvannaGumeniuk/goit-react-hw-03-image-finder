import { Component } from "react";

export default class ImageGallery extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchKey !== this.props.searchKey) {
            console.log("prev:", prevProps.searchKey);
            console.log(this.props.searchKey);
        }
    }
    render() {
        return (
            <div>
                <p>{ this.props.searchKey}</p>
            </div>
        )
    }
}
