import React, { useState, useRef, useEffect } from "react";
import "../MangalyatraScreen.css";
import HTMLFlipBook from "react-pageflip";
import axios from "axios";
import { Button, Row, Col } from "react-bootstrap";

function GujMy1() {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState("");
  const [isPageFlipReady, setIsPageFlipReady] = useState(false);
  const pageFlipRef = useRef();

  const handlePageChange = () => {
    let page = pageFlipRef.current.pageFlip().getCurrentPageIndex();
    setCurrentPage(page);
    console.log(page);
  };

  useEffect(() => {
    if (isPageFlipReady) {
      handlePageChange();
    }
  }, [isPageFlipReady]);

  const styles = ``;
  const prevPage = () => {
    pageFlipRef.current.pageFlip().flipPrev();
  };

  const nextPage = () => {
    pageFlipRef.current.pageFlip().flipNext();
  };

  useEffect(() => {
    const totalPageCounter = () => {
      let counter = pageFlipRef.current.pageFlip().getPageCount();
      setTotalPages(counter);
    };

    if (isPageFlipReady) {
      totalPageCounter();
    }
  }, [isPageFlipReady]);

  const fetchPages = async () => {
    const pageResponse = await axios.get(
      `http://127.0.0.1:8000/api/mangalyatra/1`
    );
    console.log(pageResponse.data);
    setPages(pageResponse.data);
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <div className="book-container">
      {pages.length !== [] ? (
        <>
          <HTMLFlipBook
            style={{
              margin: "0 auto",
            }}
            size="stretch"
            width={424}
            height={600}
            ref={pageFlipRef}
            showCover={true}
            minWidth={424}
            maxWidth={424}
            minHeight={600}
            maxHeight={600}
            onFlip={handlePageChange}
            onInit={() => setIsPageFlipReady(true)}
          >
            <div>
              <img src={pages.coverPage} width={424}></img>
            </div>
            {pages.page1 !== null ? (
              <div>
                <img src={pages.page1} width={424}></img>
              </div>
            ) : (
              <div></div>
            )}
            {pages.page2 !== null ? (
              <div>
                <img src={pages.page2} width={424}></img>
              </div>
            ) : (
              <div></div>
            )}
            {pages.page3 !== null ? (
              <div>
                <img src={pages.page3} width={424}></img>
              </div>
            ) : (
              <div></div>
            )}
            {pages.page4 !== null ? (
              <div>
                <img src={pages.page4} width={424}></img>
              </div>
            ) : (
              <div></div>
            )}
            {pages.page5 !== null ? (
              <div>
                <img src={pages.page5} width={424}></img>
              </div>
            ) : (
              <div></div>
            )}
          </HTMLFlipBook>
          <Row style={{ marginTop: "50px" }}>
            <Col>
              <Row>
                <Button
                  style={{ width: "160px", margin: "0 20px" }}
                  className="btn--secondary"
                  onClick={prevPage}
                >
                  Prev Page
                </Button>
              </Row>
            </Col>
            <Col>
              <Row>
                <Button
                  style={{ width: "160px", margin: "0 20px" }}
                  className="btn--secondary"
                  onClick={nextPage}
                >
                  Next Page
                </Button>
              </Row>
            </Col>
          </Row>
          <Row>
            <p>
              Pages: {currentPage + 1}/ {totalPages}
            </p>
          </Row>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default GujMy1;
