import React from 'react'

const Pagination = ({page,totalPage,onprev,onNext}) => {

  if(totalPage === 0) return null;
  return (
    <div className='pagination'>

      <button onClick={onprev} disabled = {page === 1}>
        <span> ⇐ prev</span>
      </button>

      <span>{page} / {totalPage}</span>
      <button onClick={onNext} disabled = {page === totalPage}>
        <span> Next ⇒</span>
      </button>
  

    </div>
  )
}

export default Pagination
