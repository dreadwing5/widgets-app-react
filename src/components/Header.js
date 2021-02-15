import React, { Fragment } from "react";
import Link from "./Link";

function Header() {
  return (
    <Fragment>
      <div className="ui secondary pointing menu">
        <Link href="/" className="item">
          Accordion
        </Link>
        <Link href="/list" className="item">
          Search
        </Link>
        <Link href="/dropdown" className="item">
          Dropdown
        </Link>
        <Link href="/translate" className="item">
          Translate
        </Link>
      </div>
    </Fragment>
  );
}

export default Header;
