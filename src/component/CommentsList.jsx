import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <>
        {this.props.arrayCommenti
          .filter(
            (arrayCommenti) => arrayCommenti.elementId === this.props.idLibro
          )
          .map((commentoLibro) => {
            return <SingleComment oggettoCommenti={commentoLibro} />;
          })}
      </>
    );
  }
}
export default CommentsList;
