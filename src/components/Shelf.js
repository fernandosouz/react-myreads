import React, { Component } from 'react';
import BooksList from './BooksList';

class Shelf extends Component{

    render(){
        const { shelfTitle } = this.props.shelfObj;
        let list = this.props.list.filter((book) => book.shelf === this.props.shelfObj.shelf)

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <BooksList list={list} updateList={this.props.updateList}/>
            </div>
        )
    }
}

export default Shelf

