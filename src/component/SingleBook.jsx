import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  cardSelezionata = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Col sx="12" sm="6" md="3">
        <Card
          style={{
            border: this.state.selected
              ? "5px solid red"
              : "5px solid lightgrey",
            height: "600px",
            cursor: "pointer",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.libriDaVisualizzare.img}
            onClick={this.cardSelezionata}
            style={{ width: "100%", height: "360px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{this.props.libriDaVisualizzare.title}</Card.Title>
            <Card.Text>
              Categoria: {this.props.libriDaVisualizzare.category}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="primary">Shop</Button>
              <div className="bg-secondary rounded-pill py-2 px-3">
                {this.props.libriDaVisualizzare.price}€
              </div>
            </div>
          </Card.Body>
        </Card>
        {this.state.selected && (
          <CommentArea idLibro={this.props.libriDaVisualizzare.asin} />
        )}
      </Col>
    );
  }
}
export default SingleBook;
