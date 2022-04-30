import React, { useState} from "react";
import ApproveBtns from "./ApproveBtns/ApproveBtns";

const CommentCard = ({data}) => {
    const { name, avatar, comment, date, status } = data;
    const [statusState, setStatusstate] = useState(status);

    const handleStatus = (status) => {
        setStatusstate(status);
    }

    return(   
        <div className="card mb-4">
            <div className="card-header">
                <div className="row">
                    <div className="col-9">
                        <a href="#" className="text-decoration-none text-dark">
                            <h3>{name} <span className='fs-6 text-black-50'>{date}</span></h3>
                        </a>
                    </div>
                    {
                        statusState === 'pending' ?
                        <ApproveBtns handleStatus={handleStatus} /> :
                        <div className="col text-end"><span className={statusState === 'Approved' ? 'text-primary' : 'text-danger'}>{statusState}</span></div>
                    }
                </div>
            </div>
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-2 text-center">
                        <a href="#">
                            <img src={avatar ? data.avatar : "https://via.placeholder.com/100"} className='rounded' />
                        </a>
                    </div>
                    <div className="col-10">
                        <h4 className="text-primary text-left">{comment}</h4>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default CommentCard;