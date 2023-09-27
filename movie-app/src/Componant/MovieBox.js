import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  titel,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const formattedVoteAverage = vote_average.toFixed(1);

  let imdbClass = "";
  if (formattedVoteAverage >= 0 && formattedVoteAverage < 5) {
    imdbClass = "imdb-red";
  } else if (formattedVoteAverage >= 5 && formattedVoteAverage < 7) {
    imdbClass = "imdb-orange";
  } else {
    imdbClass = "imdb-green";
  }

  return (
    <div className="card text-center bg-secendary mb-3">
      <div className="card-body" style={{ backgroundColor: "#DCDCDC" }}>
        <img
          className="card-img-top rounded"
          src={API_IMG + poster_path}
          alt={titel}
        />
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleShow}>
            Plus d'infos
          </button>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#DCDCDC" }}>
              <img
                className="card-img-top rounded"
                style={{ width: "15rem" }}
                src={API_IMG + poster_path}
                alt={titel}
              />
              <h3>{titel}</h3>
              <h4>
                Note IMDb :{" "}
                <span className={imdbClass}>{formattedVoteAverage}</span>
              </h4>
              <h5>Date de Sortie : {release_date}</h5>
              <br />
              <h6>Synopsis</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fermer
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
