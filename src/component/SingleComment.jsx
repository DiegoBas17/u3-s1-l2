import { Component } from "react";
import { Accordion, Badge } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      <Accordion className="border border-1">
        {console.log(this.props.index)}
        <Accordion.Item eventKey={` ${this.props.index.toString()} `}>
          <Accordion.Header>
            {this.props.oggettoCommenti.comment}
          </Accordion.Header>
          <Accordion.Body className="d-flex justify-content-between">
            <p className="mb-0 d-inline">
              {this.props.oggettoCommenti.elementId}
            </p>
            <Badge className="d-inline ms-auto">
              {this.props.oggettoCommenti.rate}
            </Badge>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}
export default SingleComment;
