import React, { Component } from 'react';
import Book from './Book';

class BooksList extends Component{



    render(){
        const { list } = this.props;

        return(
            <div className="bookshelf-books">
                {list.length === 0 ? (
                    <div> Nenhum livro encontrado </div>
                ) : (
                    <ol className="books-grid">
                        {list.map((obj, index) => (
                            <li key={index}>
                                <Book book={obj}  />
                            </li>
                        ) )}
                    </ol>
                )}

            </div>
        )
    }
}
export default BooksList