import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDeBouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => setDeBouncedTerm(term), 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          origin: "*",
          action: "query",
          format: "json",
          list: "search",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResult = results.map((result) => {
    const newResult = result.snippet.replace(/(<([^>]+)>)/gi, "");
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {newResult}
        </div>
      </div>
    );
  });
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label>Wiki Search</label>
          <input
            type="text"
            name="searchTerm"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
        <div className="ui celled list">{renderedResult}</div>
      </form>
    </div>
  );
}

export default Search;
