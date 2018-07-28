import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksList from '../components/BooksList'
import * as BooksAPI from "../Utils/BooksAPI";
import { DebounceInput } from 'react-debounce-input';

class SearchPage extends Component{

    state = {
        query: '',
        searchListOfBooks: [],
        myListOfBooks: [],
        message: "Nenhum livro encontrado nessa sessão."
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
                if(Array.isArray(searchListOfBooks)) {
                    searchListOfBooks.forEach((searchBook) => {
                        const book = myListOfBooks.find(this.checkBookId, searchBook.id);
                        searchBook.shelf = book ? book.shelf : 'none';
                    });
                    this.setState({searchListOfBooks: searchListOfBooks})
                }else{
                    this.setState({searchListOfBooks: []})
                }
            },(err)=>{
                this.setState(() => ({
                    message: err.toString()
                }))
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

    updateList = (book) => {

    }

    render(){
        const { query, searchListOfBooks, message } = this.state;

        return(
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to='/'>Close</Link>
                            <div className="search-books-input-wrapper">
                                <DebounceInput
                                    type="text"
                                    name="query"
                                    placeholder="Faça sua pesquisa aqui..."
                                    value={query}
                                    minLength={1}
                                    debounceTimeout={300}
                                    onChange={(event) => {
                                        this.updateQuery(event.target.value)
                                        this.getBooksByQuery(event.target.value)
                                    }}
                                />
                            </div>
                    </div>
                </div>
                {searchListOfBooks.length > 0 ? (<div className="search-books-results">
                        <BooksList list={searchListOfBooks} updateList={this.updateList}/>
                    </div>):
                    (<div className="alert alert-danger" style={{marginTop:100, marginLeft:"35%", position:"absolute"}} role="alert">
                            {message}
                    </div>)}
            </div>
        )
    }
}
export default SearchPage