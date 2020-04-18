import React  from 'react'
import './book-list-item.css'

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, price, author, coverImage } = book ;
    return( 
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={coverImage}  alt="title"/>
            </div>
            <div className='book-details'>
                <span className="book-title">{title}</span>
                <div>{author}</div>
                <div>{price}</div>
                <button className="btn btn-info add-to-card"
                    onClick={ onAddedToCart }>Add to card</button>
            </div>
        </div>
    );
}

export default BookListItem