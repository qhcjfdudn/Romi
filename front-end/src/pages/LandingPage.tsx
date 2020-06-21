/** @jsx jsx  */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
// import Pager from "react-bootstrap/lib/Pager";
import { Pagination } from 'react-bootstrap'

import ReactPageScroller from '../utils/Scroll'
import Intro from '../components/landing/Intro'
import Video from '../components/landing/Video'
import Profile from '../components/landing/Profile'
import Tutorial from '../components/landing/Tutorial'

import '../index_lan.css'

export default function LandingPages() {
  const [currentPage, setCurrentPage] = useState<number | null>(null)

  const handlePageChange = (i: number) => {
    setCurrentPage(i) // set currentPage number, to reset it from the previous selected.
  }

  function getPagesNumbers() {
    const pageNumbers = []

    for (let i = 1; i <= 4; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} eventKey={i - 1} onSelect={handlePageChange}>
          {}
        </Pagination.Item>
      )
    }
    return [...pageNumbers]
  }

  const pagesNumbers = getPagesNumbers()

  return (
    <body>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <Intro />
        <Video />
        <Profile />
        <Tutorial />
      </ReactPageScroller>
      <Pagination className="pagination-additional-class">
        {pagesNumbers}
      </Pagination>
    </body>
  )
}
