import React from "react";

const ApproveBtns = ({handleStatus}) => {
  return (
    <div className="col text-end">
        <button className="btn btn-primary btn-block me-1" onClick={() => handleStatus('Approved')}>Approve</button>
        <button className="btn btn-danger btn-block" onClick={() => handleStatus('Rejected')}>Reject</button>
    </div>
  );
};

export default ApproveBtns;