import React from "react"
const FilterPanel=()=>{
    return(
        <div className="d-flex">
            <button className="btn btn-primary">
                All
            </button>
            <button className="btn btn-outline-primary">
                Active
            </button>
            <button className="btn btn-outline-primary">
                Done
            </button>
        </div>
    )
}
export default FilterPanel;