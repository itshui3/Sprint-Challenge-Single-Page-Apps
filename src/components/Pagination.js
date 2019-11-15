import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pages = ({pageNum, pageLink}) => {

  const arr = [];

  for (let i = 1; i < pageNum + 1; i++) {
    arr.push(i);
  }

  return (
    <Pagination aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>

      {arr
        ? arr.map(d => (
            <PaginationItem key={d}>
              <PaginationLink id={d} onClick={pageLink}>
              {d}
              </PaginationLink>
            </PaginationItem>
          ))
        : null
      }

      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
}

export default Pages;