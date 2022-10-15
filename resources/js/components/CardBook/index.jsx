import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
} from "reactstrap";
import "./style.scss";

function CardBook(props) {
    return (
        <Card className="m-2 mt-4 mb-4">
            <img className="card__image" alt="Sample" src="https://lh3.googleusercontent.com/kSue6Hy7y1joZRrGLZOhOZKUrQ1OvKFO74qhM5HHztyg71lDHK3K-631VrSiHbljuhBG7pJH90RS3MAPvrcODd90aYy4V93RTw=w960-rj-nu-e365" />
            <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                </CardText>
            </CardBody>
            <CardFooter>Footer</CardFooter>
        </Card>
    );
}

export default CardBook;
