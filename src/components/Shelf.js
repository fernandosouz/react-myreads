import React, { Component } from 'react';
import BooksList from './BooksList';
import * as BooksAPI from "../Utils/BooksAPI";

class Shelf extends Component{
    state = {
        listOfBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((response) => {
            this.setState(() => ({
                listOfBooks: response.filter((book) => book.shelf === this.props.shelfObj.shelf)
            }))
        })
    }

    render(){
        const { shelfTitle } = this.props.shelfObj;
        const { listOfBooks } = this.state;

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <BooksList list={listOfBooks} />
            </div>
        )
    }
}

export default Shelf

