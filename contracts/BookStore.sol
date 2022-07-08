//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
contract BookStore {
    // Book's infos
    struct Book {
        string bookName;
        string bookAuthor;
        uint256 bookPrice;
        bool available;
    }
    // Books list
    Book[] public books;
    // Create a new book to add books list
    function createBook(
        string memory _name,
        string memory _author,
        uint256 _price,
        bool _available
    ) external {
        books.push(Book(_name, _author, _price, _available));
    }
    // Update book price by books list index
    function updateBookPrice(
        uint _index, 
        uint256 _newPrice
    ) external {
        books[_index].bookPrice = _newPrice;
    }
    // Update book avalibility by books list index
    function updateBookAvalibility(
        uint _index,
        bool _isAvaliable
    ) external {
        books[_index].available = _isAvaliable;
    }
    // Gell all books
    function getAllBooks() external view returns(Book[] memory) {
        return books;
    }
}