import React from 'react';
import { shallow } from 'enzyme'
import Book from "./components/Book";

describe('[Component] Book', () => {

    it('shallow render Book component correctly', () => {
        expect(shallow(<Book book={
            {shelf: 'none',
            imageLinks: {
                    thumbnail: "http://books.google.com/books/content?id=4O8Gfb76eTgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                }
            }
        } />));
    });


});