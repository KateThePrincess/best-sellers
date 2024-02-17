import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { books } from './books';
import Book from './Book';

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return (
            <Book key={book.id} {...book} getBook={getBook} number={index} />
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
