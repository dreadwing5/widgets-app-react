import React from "react";

function Link({ href, children, className }) {
  const onClickLink = (e) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClickLink} href={href} className={className}>
      {children}
    </a>
  );
}

export default Link;
