import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, paginateBack, paginateForward, paginateMultiple, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
    <nav aria-label="pagination">
      <ul className='pagination'>
        <li><button disabled={currentPage === 1} onClick={() => paginateBack()} ><i className="fa fa-chevron-left"></i></button></li>
        {pageNumbers.map(number => (
          number < currentPage + 6 &&
          <li key={number} style={number < currentPage ? {display: "none"} : {}} >
            <button style={number === currentPage ? { backgroundColor: 'yellow', fontWeight: 'bold' } : { }} onClick={() => paginate(number)} >
              {number}
            </button>
          </li>
        ))}
        <li style={{width: '20px', background: 'none', textAlign: 'center'}}>...</li>
        <li key={pageNumbers.slice(-1)} >
          <button style={pageNumbers.slice(-1) === currentPage ? { backgroundColor: 'yellow', fontWeight: 'bold' } : { }} onClick={() => paginate(pageNumbers.slice(-1))} >
            {pageNumbers.slice(-1)}
          </button>
        </li>
        <li><button onClick={() => paginateForward()} ><i className="fa fa-chevron-right"></i></button></li>
      </ul>
    </nav>
      <br/>
      <br/>
      <br/>
    </div>

  );
};

export default Pagination;
