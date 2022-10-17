import React from "react";

import "./style.scss";

function Pagination(props) {
    return (
        <div className="pagination">
            <button>
                Previos
            </button>
            <button>
                1
            </button>
            <button>
                Next
            </button>
        </div>
    );
}

export default Pagination;
