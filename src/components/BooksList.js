import React, { Component } from 'react';
import Book from './Book';


class BooksList extends Component{




    render(){
        const { list } = this.props;

        return(
            <div>
                {list.length === 0 ? (
                    <div> Nenhum livro encontrado </div>
                ) : (

                    <div className="bookshelf-books">
                        <span>Clique no livro para ver mais detalhes...</span>
                        <ol className="books-grid">
                            {list.map((obj, index) => (
                                <li key={index}>
                                    <Book book={obj}  />
                                </li>
                            ) )}
                        </ol>
                    </div>
                )}
            </div>

        )
    }
}
export default BooksList