import React, { Component } from 'react';
import Book from './Book';

class BooksList extends Component{



    render(){
        const { list } = this.props;

        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {list.map((obj, index) => (
                        <li key={index}>
                            <Book book={obj}  />
                        </li>
                    ) )}
                </ol>
            </div>
        )
    }
}
export default BooksList