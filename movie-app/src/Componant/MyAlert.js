import React, { Component } from "react";
import { Alert } from "react-bootstrap";

class MyAlert extends Component {
  // Méthodes du composant, par exemple : componentDidMount, render, etc.

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vertical-center">
        <Alert className="text-center myAlert">
          Désolé, aucun film ne correspond à votre recherche, relancer la
          recherche! 😅
        </Alert>
      </div>
    );
  }
}

export default MyAlert;
