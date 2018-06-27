import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf'

class HomePage extends Component{

    state = {
        shelfArray: [
                {shelfTitle:"Currently Reading", shelf:"currentlyReading" },
                {shelfTitle:"Want to Read", shelf:"wantToRead"},
                {shelfTitle:"Read", shelf:"read"}
            ]
    }

    render(){
        const {shelfArray } = this.state;

        return(
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        {shelfArray.map((obj, index) => (
                            <div key={index}>
                                <Shelf shelfObj={obj}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}
export default HomePage