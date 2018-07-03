import React, { Component } from 'react';
import Modal from 'react-modal';
import StarRatingComponent from 'react-star-rating-component';

class BookDetails extends Component{

    constructor() {
        super();

        this.state        = {
            modalIsOpen: false,
            title:'',
            rating: 1
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }

    openModal(){
        this.setState({modalIsOpen: true});
    }


    componentDidMount() {
        this.setState({
            title : this.props.details.title,
            rating: this.props.details.averageRating
        });
        Modal.setAppElement('body');
    }

    render(){
        const {title, authors, categories, description, infoLink, publishedDate, pageCount,
            publisher, contentVersion} = this.props.details;

        return(
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                >

                    <div className="book-cover-details" style={{
                        backgroundImage: `url(${this.props.details.imageLinks.thumbnail})`}}>
                    </div>

                    <div className="book-cover-capa" style={{
                        margin: 0,
                        width: 128,
                        height: 188,
                        top: -230,
                        position: 'relative',
                        backgroundImage: `url(${this.props.details.imageLinks.thumbnail})`}}>
                    </div>
                    <div className="book-cover-capa">
                        <div className="row">
                            {authors}: {title}
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={this.state.rating}
                                editing={false}
                            />
                        </div>

                        <h4>{publishedDate} by {publisher}</h4>
                    </div>
                    <div className="div-details">
                        <div className="row">
                            <p>
                                {description}
                            </p>
                        </div>
                        <div className="row">
                            <div className="column">
                                <p>Categories: {categories}</p>
                                <p>Authors: {authors}</p>
                                <p>Pages: {pageCount}</p>
                                <p>Version: {contentVersion}</p>
                            </div>
                            <div className="column">
                                <p> <a href={infoLink}>See More</a></p>
                            </div>
                        </div>

                    </div>



                    <div className="book-shelf-changer-close" onClick={this.closeModal}></div>
                </Modal>
                <div className="book-shelf-changer-details" onClick={this.openModal}></div>
            </div>

        )
    }
}
export default BookDetails