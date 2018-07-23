import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf'
import * as BooksAPI from "../Utils/BooksAPI";

class HomePage extends Component{

    state = {
        teste: false,
        listOfBooks: [],
        shelfArray: [
                {shelfTitle:"Currently Reading", shelf:"currentlyReading" },
                {shelfTitle:"Want to Read", shelf:"wantToRead"},
                {shelfTitle:"Read", shelf:"read"}
            ]
    }

    componentDidMount() {
        BooksAPI.getAll().then((response) => {
            this.setState({listOfBooks: response})
        })
    }

    checkBookId(element, index, array){
        return element.id === this;
    }


    updateList = (book) => {
        this.setState({ listOfBooks: this.state.listOfBooks })
    }

    render(){
        const {shelfArray } = this.state;

        return(
            <div>
                <div className="list-books-title">
                    <h1>
                        Projeto My Reads
                    </h1>
                </div>
                <br></br>
                <div className="list-books">
                    <div className="list-books-content">
                        {shelfArray.map((obj, index) => (
                            <div key={index}>
                                <Shelf shelfObj={obj}
                                       list={this.state.listOfBooks}
                                        updateList={this.updateList}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link data-toggle="tooltip" data-placement="left" title="Adicionar livros..." to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}
export default HomePage