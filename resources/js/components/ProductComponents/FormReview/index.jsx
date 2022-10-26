import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { Input, Label } from "reactstrap";
import "./style.scss";

function FormReview(props) {
    return (
        <div className="review__form col-4">
            <div className="review__add">
                <span className="review__add-title">Write a Review</span>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Add a title</Label>
                        <Input
                            id="exampleEmail"
                            name="text"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Details please! Your review helps other shoppers</Label>
                        <Input id="exampleText" name="text" type="textarea" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input id="exampleSelect" name="select" type="select">
                            <option>5 Star</option>
                            <option>4 Star</option>
                            <option>3 Star</option>
                            <option>2 Star</option>
                            <option>1 Star</option>
                        </Input>
                    </FormGroup>
                    <div className="btn-submit">
                        <Button>Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default FormReview;
