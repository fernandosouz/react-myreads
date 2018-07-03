import React, { Component } from 'react';
import Modal from 'react-modal';

class BookDetails extends Component{

    constructor() {
        super();

        this.state        = {
            modalIsOpen: false,
            title:''
        };
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    openModal(){
        this.setState({modalIsOpen: true});
    }


    componentDidMount() {
        this.setState({
            title : this.props.details.title
        });
        Modal.setAppElement('body');
    }

    render(){

        console.log(this.props);

        return(
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>

                    <div>{this.state.title}</div>

                    <button onClick={this.closeModal}>close</button>
                </Modal>
                <div className="book-shelf-changer-details" onClick={this.openModal}></div>
            </div>

        )
    }
}
export default BookDetails