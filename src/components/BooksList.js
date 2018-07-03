import React, { Component } from 'react';
import Book from './Book';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Col} from 'reactstrap';


class BooksList extends Component{

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }


    render(){
        const { list } = this.props;

        return(
            <div>
                {list.length === 0 ? (
                    <div>a</div>
                ) : (

                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {list.map((obj, index) => (
                                <li key={index}>
                                    <Book book={obj} updateList={this.props.updateList}/>
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