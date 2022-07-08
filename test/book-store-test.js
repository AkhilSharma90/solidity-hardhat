const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("BookStore", function () {
  let BookStore, bookStore;
  before(async function () {
    BookStore = await ethers.getContractFactory("BookStore");
    bookStore = await BookStore.deploy();
    await bookStore.deployed();
  });
  it("should create a new book", async function () {
    await bookStore.createBook("1984", "George Orwell", 2, true);
    let books = await bookStore.getAllBooks();
    expect(books[0].bookName).to.equal("1984");
    expect(books[0].bookAuthor).to.equal("George Orwell");
    expect(books[0].bookPrice).to.equal(2);
    expect(books[0].available).to.equal(true);
  });
  it("should update book price", async function () {
    await bookStore.updateBookPrice(0, 4);
    let books = await bookStore.getAllBooks();
    expect(books[0].bookPrice).to.equal(4);
  });
  it("should update book availibity", async function () {
    await bookStore.updateBookAvalibility(0, false);
    let books = await bookStore.getAllBooks();
    expect(books[0].available).to.equal(false);
  });
  it("should return all books", async function () {
    await bookStore.createBook("Building a Second Brain", "Tiago Forte", 3, true );
    await bookStore.createBook("Last Summer on State Street", "Toya Wolfe", 1, true);
    await bookStore.createBook("Do Hard Things", "Steve Magness", 5, false);
    await bookStore.createBook("The Power of Discipline", "Daniel Walter", 6, true);
    await bookStore.createBook("Mindful Self-Discipline", "Giovanni Dienstmann", 2, false);
    let books = await bookStore.getAllBooks();
    expect(books.length).to.equal(6);
  });
});