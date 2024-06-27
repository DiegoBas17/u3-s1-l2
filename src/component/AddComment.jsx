import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    nuovoCommento: "",
  };

  /* fetchNewComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNWI0NDNhMzhjYjAwMTVmNjNjZjIiLCJpYXQiOjE3MTk0OTEzOTYsImV4cCI6MTcyMDcwMDk5Nn0.LDXvAzpXS0c_jlmLQEYfFPW6AtZZGHZZ5chs8xkBFzI",
      },
      body: {},
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei commenti");
        }
      })
      .then((arrayComment) => {
        console.log(arrayComment);
        this.setState({ commenti: arrayComment });
      })
      .catch((err) => alert(err));
  };
  componentDidMount() {
    this.fetchNewComment();
  } */
  render() {
    return (
      <Form>
        <Form.Control type="text" placeholder="Aggiuingi un commento" />
        <Form.Select aria-label="Number of seats">
          <option>Quante stelle</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
        <Button variant="outline-secondary" id="button-addon2">
          Cerca
        </Button>
      </Form>
    );
  }
}
export default AddComment;
