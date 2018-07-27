import React from 'react';
import { shallow } from 'enzyme'
import Book from "./components/Book";
import BookList from "./components/BooksList";
import BookDetails from "./components/BoookDetails";
import Shelf from "./components/Shelf";
import renderer from 'react-test-renderer';


describe('[Component] Book', () => {
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


    it('[BookDetails] renders correctly', () => {
        const tree = renderer.create(
            <BookDetails details={
                {shelf: 'none' }
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


    it('[Shelf] renders correctly', () => {
        const tree = renderer.create(
            <Shelf shelfObj={{shelfTitle: "teste", shelf:"tesets"}}
                   list={[
                       {shelf: 'none',
                           imageLinks: {
                               thumbnail: "http://books.google.com/books/content?id=4O8Gfb76eTgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                           }
                       },
                       {shelf: 'none',
                           imageLinks: {
                               thumbnail: "http://books.google.com/books/content?id=4O8Gfb76eTgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                           }
                       }]}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });


});