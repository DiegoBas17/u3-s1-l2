import { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

class AddComment extends Component {
  render() {
    return (
      <>
        <InputGroup className="my-3">
          <Form.Control
            type="text"
            placeholder="Aggiuingi un commento"
            /* value={}
            onChange={} */
          />
          <Button variant="outline-secondary" id="button-addon2">
            Cerca
          </Button>
        </InputGroup>
      </>
    );
  }
}
export default AddComment;
