import React, { useState, useRef, useEffect } from "react";
import "./MangalyatraScreen.css";
import axios from "axios";
import EngMy1 from "./english/EngMy1";
import GujMy1 from "./gujarati/GujMy1";

function MangalyatraScreen() {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageFlipRef = useRef();
  const [language, setLanguage] = useState("english");
  const [edition, setEdition] = useState("1");

  const handlePageChange = (e) => {
    setCurrentPage(e.data);
  };

  const prevPage = () => {
    pageFlipRef.current.pageFlip().flipPrev();
  };

  const nextPage = () => {
    pageFlipRef.current.pageFlip().flipNext();
  };

  const fetchPages = async () => {
    const pageResponse = await axios.get(
      `http://127.0.0.1:8000/api/mangalyatra/1`
    );
    console.log(pageResponse.data);
    console.log(pages.length);
    setPages(pageResponse.data);
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <div>
      {(() => {
        if (language === "english" && edition === "1") {
          return <EngMy1 />;
        }
      })()}
      {(() => {
        if (language === "hindi" && edition === "1") {
          return <EngMy1 />;
        }
      })()}
      {(() => {
        if (language === "gujarati" && edition === "1") {
          return <GujMy1 />;
        }
      })()}
    </div>
  );
}

export default MangalyatraScreen;
