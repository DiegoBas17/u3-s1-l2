import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    commenti: [],
  };

  fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNWI0NDNhMzhjYjAwMTVmNjNjZjIiLCJpYXQiOjE3MTk0OTEzOTYsImV4cCI6MTcyMDcwMDk5Nn0.LDXvAzpXS0c_jlmLQEYfFPW6AtZZGHZZ5chs8xkBFzI",
      },
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
    this.fetchComments();
  }
  render() {
    return (
      <>
        <AddComment idLibro={this.props.idLibro} />
        <CommentsList
          arrayCommenti={this.state.commenti}
          idLibro={this.props.idLibro}
        />
      </>
    );
  }
}

export default CommentArea;
