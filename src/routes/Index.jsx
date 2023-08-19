import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../layouts/NavBar';
import BooksView from '../features/books/BooksView';
import AddBook from '../features/books/AddBook';
import Footer from '../layouts/Footer';
import EditBook from '../features/books/EditBook';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <main>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/show-books" element={<BooksView></BooksView>}></Route>
                    <Route path="/add-book" element={<AddBook></AddBook>}></Route>
                    <Route path="/edit-book" element={<EditBook></EditBook>}></Route>
                    <Route path="*" element={<Error></Error>}></Route>
                </Routes>
            </main>
            <Footer></Footer>
        </BrowserRouter>
    );
};

export default Index;