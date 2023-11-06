import React from "react";



function Project({ title, link, src }) {
  return (
    <div className="col-4">
      <div className="card text-center mb-3">
        <img src={src} className="card-img-top" alt={title} />
        <div className="card-body">
          <h4 className="card-title"> <b>{title}</b> </h4>
          <a href={link} className="btn">
            <img src="/assets/github-mark.png" width="32" height="32" alt="github-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
