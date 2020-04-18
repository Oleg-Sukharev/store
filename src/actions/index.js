const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUESTED",
    }
}

const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_ERROR",
        payload: error
    }
}

const bookAddedToCart = (bookId) => {
    console.log(bookId)
    return{
        type: "BOOKS_ADDED_TO_CART",
        payload: bookId
    }
}

const allBookRemoveFromCart = (bookId) => {
    return{
        type: "ALL_BOOKS_REMOVE_FROM_CART",
        payload: bookId
    }
}


const bookRemoveFromCart= (bookId) => {
    return{
        type: "BOOKS_REMOVE_FROM_CART",
        payload: bookId
    }
}

const fetchBooks =  (bookstoreService,dispatch) => () => {
    // console.log("Fetching Books")
        dispatch(booksRequested());
        bookstoreService.getBooks()
            .then((data) => dispatch(booksLoaded(data)))
            .catch((err)  => dispatch(booksError(err)))
}



export {
    fetchBooks,
    bookAddedToCart,
    allBookRemoveFromCart,
    bookRemoveFromCart
}