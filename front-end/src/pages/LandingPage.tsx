/** @jsx jsx  */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
// import Pager from "react-bootstrap/lib/Pager";
import { Pagination } from 'react-bootstrap'

import ReactPageScroller from './Scroll'
import IntroComponent from './LandingPages/IntroComponent'
import VideoComponent from './LandingPages/VideoComponent'
import ProfileComponent from './LandingPages/ProfileComponent'
import TutorialComponent from './LandingPages/TutorialComponent'

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
        <IntroComponent />
        <VideoComponent />
        <ProfileComponent />
        <TutorialComponent />
      </ReactPageScroller>
      <Pagination className="pagination-additional-class">
        {pagesNumbers}
      </Pagination>
    </body>
  )
}
