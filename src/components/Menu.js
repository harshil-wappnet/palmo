import React, { useState } from 'react';
import Listofmenu from '../data/Listofmenu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../Redux/Actions"
function Menu() {
    const itemCounts = useSelector(state => state.itemCounts);
    const dispatch = useDispatch();
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Listofmenu.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(Listofmenu.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div className='container my-3 menu'>
            <div className='row justify-content-center'>
                {currentItems.map((item, index) => (
                    <div className="card cards col-lg-3 m-3 col-md-3 col-sm-6" key={index}>
                        <img src={item.image} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <div className='mb-2'>
                            <button className='btn btn-outline-primary btn-primary text-white' onClick={() => dispatch(Increment(item.id))}>+</button>
                            <span className='mx-2'>{itemCounts[item.id] || 0}</span>
                            <button className='btn btn-outline-primary btn-primary text-white' onClick={() => dispatch(Decrement(item.id))}>-</button>
                        </div>
                    </div>
                ))}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center my-3">
                    <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                        <Link className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                            Previous
                        </Link>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 && 'active'}`}>
                            <Link className="page-link" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </Link>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
                        <Link className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
