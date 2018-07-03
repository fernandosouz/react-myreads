import React, { Component } from 'react';
import * as BooksAPI from "../Utils/BooksAPI";
import BookDetails from './BoookDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Col} from 'reactstrap';


class Book extends Component{

    state  = {
        book: '',
        arrayOptions: [
            {name: "currentlyReading", desc:"Currently Reading"},
            {name: "wantToRead", desc: "Want to Read"},
            {name: "read", desc: "Read"},
            {name: "none", desc: "None"}
        ],
        openModal: false} ;

    notifySucesss = () => {
        toast.success("Successfully!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2500,
            onClose: () => {
                this.props.updateList(this.state.book);
            }
        });
    };

    notifyErr = () => {
        toast.error("Ops, error! Try again!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000
        });
    }

    updateAPI = (event) => {
        const b = this.props.book;
        b.shelf = event.target.value;
        this.setState({book: b});
        BooksAPI.update(this.props.book, event.target.value).then((response) => {
            console.log(response);
            this.notifySucesss();
        }, (response) => {
            console.log(response);
            this.notifyErr();
        });
    }

    componentDidMount(){
        this.setState({
            book: this.props.book
        })
    }

    render(){
        const {title, authors} = this.props.book;
        const {arrayOptions} = this.state;

        return(
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 188,
                            backgroundImage: `url(${ this.props.book.imageLinks.thumbnail})`}}></div>
                        <BookDetails details={this.props.book} />
                        <div className="book-shelf-changer">
                            <select value={this.props.book.shelf} onChange={this.updateAPI}>
                                {arrayOptions.map((obj) => (
                                    <option key={obj.name}
                                            value={obj.name}>{obj.desc}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                    <div>
                        <ToastContainer />
                    </div>
                </div>

            </div>
        )
    }
}

export default Book
