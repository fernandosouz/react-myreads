import React, { Component } from 'react';
import * as BooksAPI from "../Utils/BooksAPI";
import BookDetails from './BoookDetails';
import 'react-toastify/dist/ReactToastify.css';



class Book extends Component{

    state  = {
        book: '',
        arrayOptions: [
            {name: "currentlyReading", desc:"Currently Reading"},
            {name: "wantToRead", desc: "Want to Read"},
            {name: "read", desc: "Read"},
            {name: "none", desc: "None"}
        ],
        openModal: false} ;

    notifySucesss = () => {
        const x = document.getElementById("snackbar");
        x.className = "show";
        this.props.updateList(this.state.book);
        setTimeout(() => {
            x.className = x.className.replace("show", "");
            }, 2000);
    };

    notifyErr = () => {
        const x = document.getElementById("snackbarerror");
        x.className = "show";
        setTimeout(() => {
            x.className = x.className.replace("show", "");
        }, 2000);
    }

    updateAPI = (event) => {
        const b = this.props.book;
        b.shelf = event.target.value;
        this.setState({book: b});
        BooksAPI.update(this.props.book, event.target.value).then((response) => {
            this.notifySucesss();
        }, (response) => {
            console.log(response);
            this.notifyErr();
        });
    }

    componentDidMount(){
        this.setState({
            book: this.props.book
        })
    }

    render(){
        const {title, authors} = this.props.book;
        const {arrayOptions} = this.state;

        return(
            <div>
                <div className="card" style={{width: 180}}>
                    <img className="card-img-top" src={this.props.book.imageLinks.thumbnail} alt=""></img>
                        <div className="card-body" style={{padding: 5}}>
                            <h5 className="card-title book-title">{title}</h5>
                            <p className="card-text book-authors">{authors}</p>
                        </div>
                        <div className="row" style={{"width":"100%", "padding-left":"18%"}}>
                            <BookDetails style={{width: 30, paddingLeft:10}} details={this.props.book} />
                            <div className="form-group" style={{width: 90}}><select style={{fontSize:10, padding:2}} className="form-control" id="exampleSelect1" value={this.props.book.shelf} onChange={this.updateAPI}>
                                    {arrayOptions.map((obj) => (
                                        <option style={{fontSize:14}}
                                            key={obj.name}
                                            value={obj.name}>{obj.desc}</option>
                                    ))}
                                </select>
                        </div>
                    </div>
                </div>
                <div id="snackbar">Successfully!</div>
                <div id="snackbarerror">Ops, try again!</div>
            </div>
        )
    }
}

export default Book
