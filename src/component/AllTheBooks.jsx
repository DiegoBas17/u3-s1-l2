import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import scifi from "../books/scifi.json"
import { Row, Col } from "react-bootstrap";

class AllTheBooks extends Component {
    state = {
        libriDaVisualizzare: scifi /* Books[index] */
    }
  render() {
    return (
      <Row>
        {this.state.libriDaVisualizzare.map(libro => {
            console.log(libro)
            return(
        <Col lg="2" key={`Libro-${libro.asin}`}>
          <Card>
            <Card.Img variant="top" src={libro.img}/>
            <Card.Body>
              <Card.Title>{libro.title}</Card.Title>
              <Card.Text>
                Categoria: {libro.category}
              </Card.Text>
              <div className="d-flex justify-content-between">
              <Button variant="primary">Shop</Button>
              <div className="bg-secondary rounded-pill py-2 px-3">{libro.price}€</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        )
        })
        }
      </Row>
    );
  }
}

export default AllTheBooks;
