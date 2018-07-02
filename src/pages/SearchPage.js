import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksList from '../components/BooksList'
import * as BooksAPI from "../Utils/BooksAPI";

class SearchPage extends Component{

    state = {
        query: '',
        searchListOfBooks: [],
        myListOfBooks: []
    }

    updateQuery = (query) => {
        this.setState( { query });
    }
    checkBookId(element, index, array){
        return element.id === this;
    }

    getBooksByQuery = (query) => {

        const {myListOfBooks} = this.state;

        if(query !== '') {
            BooksAPI.search(query).then((searchListOfBooks) => {

                searchListOfBooks.forEach( (searchBook) => {
                    const book = myListOfBooks.find(this.checkBookId, searchBook.id)
                    searchBook.shelf = book ? book.shelf : 'none';
                });

                this.setState({searchListOfBooks: Array.isArray(searchListOfBooks) ? searchListOfBooks : []  })
            })
        }else{
            this.setState({searchListOfBooks: []})
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((response) => {
            this.setState(() => ({
                myListOfBooks: response
            }))
        })
    }

    render(){
        const { query, searchListOfBooks } = this.state;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">

                        <input type="text"
                               placeholder="Search by title or author"
                               value={query}
                               onChange={(event) => {
                                   this.updateQuery(event.target.value)
                                   this.getBooksByQuery(event.target.value)
                               }}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksList list={searchListOfBooks}/>
                </div>
            </div>
        )
    }
}
export default SearchPage