import { Component } from "react";
import Button from "react-bootstrap/Button";
import scifi from "../books/scifi.json";
import fantasy from "../books/fantasy.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import history from "../books/history.json";
import { Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    libriDaVisualizzare: fantasy,
    searchInput: "",
  };

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Cerca"
            value={this.state.searchInput}
            onChange={this.handleChange}
          />
          <Button variant="outline-secondary" id="button-addon2">
            Cerca
          </Button>
        </InputGroup>
        <h2 className="mb-4">Cambia categoria con un click</h2>
        <Button
          className="mx-2 mb-3"
          variant="primary"
          onClick={() => this.setState({ libriDaVisualizzare: fantasy })}
        >
          Fantasy
        </Button>
        <Button
          className="mx-2 mb-3"
          variant="primary"
          onClick={() => this.setState({ libriDaVisualizzare: history })}
        >
          History
        </Button>
        <Button
          className="mx-2 mb-3"
          variant="primary"
          onClick={() => this.setState({ libriDaVisualizzare: horror })}
        >
          Horror
        </Button>
        <Button
          className="mx-2 mb-3"
          variant="primary"
          onClick={() => this.setState({ libriDaVisualizzare: romance })}
        >
          Romance
        </Button>
        <Button
          className="mx-2 mb-3"
          variant="primary"
          onClick={() => this.setState({ libriDaVisualizzare: scifi })}
        >
          Scifi
        </Button>
        <Row className="g-2">
          {this.state.searchInput ? this.state.libriDaVisualizzare.filter(libro => libro.title.toLowerCase().includes(this.state.searchInput.toLowerCase())).map((libro) => {
            return <SingleBook libriDaVisualizzare={libro} />;
          }) : this.state.libriDaVisualizzare.map((libro) => {
            return <SingleBook libriDaVisualizzare={libro} />;})}
        </Row>
      </Container>
    );
  }
}

export default BookList;
