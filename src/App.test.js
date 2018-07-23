import React from 'react';
import { shallow } from 'enzyme'
import Book from "./components/Book";
import BookList from "./components/BooksList";
import renderer from 'react-test-renderer';


describe('[Component] Book', () => {

    /*it('shallow render Book component correctly', () => {
        expect(shallow(<Book book={
            {shelf: 'none',
            imageLinks: {
                    thumbnail: "http://books.google.com/books/content?id=4O8Gfb76eTgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                }
            }
        } />));
    });*/

    it('[Book] renders correctly', () => {
        const tree = renderer.create(
            <Book book={
                {shelf: 'none',
                    imageLinks: {
                        thumbnail: "http://books.google.com/books/content?id=4O8Gfb76eTgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    }
                }
            } />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });


    it('[BooksList] renders correctly', () => {
        const tree = renderer.create(
            <BookList list={[
                {shelf: 'none',
                    imageLinks: {
                        thumbnail: "http://books.google.com/books/content?id=4O8Gfb76eTgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    }
                },
                {shelf: 'none',
                    imageLinks: {
                        thumbnail: "http://books.google.com/books/content?id=4O8Gfb76eTgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    }
                }]}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });


});