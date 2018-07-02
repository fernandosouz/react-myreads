import React, { Component } from 'react';
import * as BooksAPI from "../Utils/BooksAPI";


class Book extends Component{

    state = {
        value: this.props.book.shelf,
        arrayOptions: [
            {name: "currentlyReading", desc:"Currently Reading"},
            {name: "wantToRead", desc: "Want to Read"},
            {name: "read", desc: "Read"},
            {name: "none", desc: "None"}
        ]
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.updateAPI(event.target.value);
    }

    updateAPI = (value) => {
        const updatePromisse = BooksAPI.update(this.props.book, value);
        updatePromisse.then((response) => {
            /*console.log(response);*/
        }, (response) => {
            /*console.log(response);*/
        })
    }

    render(){

        const {title, authors} = this.props.book;
        const {arrayOptions, value} = this.state;

        //TODO - fazer os que não tem shelf virem como NONE.
        return(
            <div  className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 188,
                        backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
                    <div className="book-shelf-changer">
                        <select value={value} onChange={this.handleChange}>
                            {arrayOptions.map((obj) => (
                                <option key={obj.name}
                                        value={obj.name}>{obj.desc}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book
