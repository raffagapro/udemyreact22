import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
//DEV ONLY!!
import { createMockData } from '../../utils';

const Comments = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        //passing mock data to the state DEV ONLY!!
        setData(createMockData(6));
    }, []);

    return(
        <div className="container mt-3">
            {data.map(d => <CommentCard key={d.id} data={d} />)}
        </div>
    );
}

export default Comments;