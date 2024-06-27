import { Component } from "react";
import { Alert, Badge } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      <Alert variant="success">
        <Alert.Heading>{this.props.oggettoCommenti.comment}</Alert.Heading>
        <span className="mb-0 d-inline">
          {this.props.oggettoCommenti.elementId}
        </span>
        <Badge className="d-inline ms-auto">
          {this.props.oggettoCommenti.rate}
        </Badge>
      </Alert>
    );
  }
}
export default SingleComment;
