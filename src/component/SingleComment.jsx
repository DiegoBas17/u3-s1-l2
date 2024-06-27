import { Component } from "react";
import { Alert } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      <Alert variant="success">
        <Alert.Heading>{this.props.oggettoCommenti.comment}</Alert.Heading>
        <p>{this.props.oggettoCommenti.rate}</p>
        <hr />
        <p className="mb-0">{this.props.oggettoCommenti.elementId}</p>
      </Alert>
    );
  }
}
export default SingleComment;
