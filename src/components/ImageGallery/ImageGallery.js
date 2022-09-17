import { Component } from "react";

export default class ImageGallery extends Component {
    state = {
        image: null,
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchKey !== this.props.searchKey) {

            fetch(`https://pixabay.com/api/?q=${this.props.searchKey}&page=1&key=28537959-b0bbf2c2513809284b91fef7c&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(image => this.setState({ image }));
        }

    }

    

    render() {
        return (
        <div>
            {this.state.image &&
            <div>
                {this.state.image.hits.webformatURL}</div>}   
        </div>
        )
    }
}
