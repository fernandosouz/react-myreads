import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksList from './BooksList'
import * as BooksAPI from "../BooksAPI";

class SearchPage extends Component{

    state = {
        query: '',
        listOfBooks: []
    }

    updateQuery = (query) => {
        this.setState( { query });
    }
    //TODO Verificar se esse é a meneira correta de se fazer várias chamadas na API
    getBooksByQuery(query){
        if(query !== '') {
            BooksAPI.search(query).then((listOfBooks) => {
                if(Array.isArray(listOfBooks)){
                    this.setState({listOfBooks})
                }else{
                    this.setState({listOfBooks: []})
                }
            })
        }else{
            this.setState({listOfBooks: []})
        }
    }

    render(){
        const { query, listOfBooks } = this.state;

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
                    {this.state.listOfBooks.length === 0 ? (
                        <div> Nenhum livro encontrado </div>
                    ) : (
                        <BooksList list={listOfBooks}/>
                    )}
                </div>
            </div>
        )
    }
}
export default SearchPage