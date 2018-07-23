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

        const thumb = this.props.details.imageLinks == undefined ? "./images/nao_disponivel.jpg" : this.props.details.imageLinks.thumbnail;

        return(
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                >

                    <div className="book-cover-details" style={{
                        backgroundImage: `url(${thumb})`}}>
                    </div>

                    <div className="book-cover-capa" style={{
                        margin: 0,
                        width: 128,
                        height: 188,
                        top: -230,
                        position: 'relative',
                        backgroundImage: `url(${thumb})`}}>
                    </div>
                    <div className="book-cover-capa">
                        <div className="row">
                            <h3>{authors}: {title}</h3>
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={this.state.rating}
                                editing={false}
                            />
                        </div>

                        <h6>{publishedDate} by {publisher}</h6>
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
                                <p> <a href={infoLink}>See More on Web</a></p>
                            </div>
                        </div>

                    </div>



                    <div className="book-shelf-changer-close" onClick={this.closeModal}></div>
                </Modal>
                <button style={{fontSize: 12, "height":"69%"}}  type="button" className="btn btn-outline-primary" onClick={this.openModal}>More</button>
                {/*<div className="book-shelf-changer-details" ></div>*/}
            </div>

        )
    }
}
export default BookDetails