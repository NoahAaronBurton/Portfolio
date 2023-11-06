import React from "react";

function Project({ title, link, imgUrl }) {
    return (

            <div className="p-2 g-col-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <img src={imgUrl} alt={title} />
                        <a href={link} className="card-link">GitHub</a>
                    </div>
                </div>
            </div>
    )
}

export default Project;