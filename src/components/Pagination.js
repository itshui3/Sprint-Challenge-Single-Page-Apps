import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pages = ({pageNum, pageLink}) => {

  const arr = [];

  for (let i = 1; i < pageNum + 1; i++) {
    arr.push(i);
  }

  return (
    <Pagination>

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

    </Pagination>
  );
}

export default Pages;