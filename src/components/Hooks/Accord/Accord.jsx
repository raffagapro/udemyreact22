import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

const Accord = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Accordion defaultActiveKey="0" className="mb-3">
            {items.map((i, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{i.title}</Accordion.Header>
                    <Accordion.Body>{i.content}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export  default Accord;