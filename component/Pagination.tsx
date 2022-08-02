import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components';

export interface IInfo {
   pages: number,
   next: number,
   prev: number,
}

const PaginationSC = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 2rem;
   p {
      margin: 0 1.5rem;
   }

`

const Pagination = ({ info }: { info: IInfo }) => {
   const router = useRouter()
   const page = router.query.page
   return (
      <PaginationSC>
         {info.prev &&
            <Link href={`/?page=${info.prev}`} passHref>
               <button>Prev</button>
            </Link>
         }
         <p>{page ? page : 1}</p>
         {info.next &&
            <Link href={`/?page=${info.next}`} passHref>
               <button>Next</button>
            </Link>
         }
      </PaginationSC>
   )
}

export default Pagination;