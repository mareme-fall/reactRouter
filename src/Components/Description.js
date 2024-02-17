import React from "react";
import { useParams } from "react-router-dom"; // Importation du hook useParams
import moviesData from "./moviesData"; // Importation des données de films
import ReactPlayer from "react-player";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Description = () => {
  // Récupération de l'ID du film depuis l'URL
  const { id } = useParams();
  // Recherche du film correspondant dans les données de films
  const movie = moviesData.find((moviesData) => moviesData.id === parseInt(id, 10));

  // Si le film n'est pas trouvé, afficher un message
  if (!movie) {
    return (
      <div>
        {/* Barre de navigation */}
        <Navbar expand="lg" className="bg-body-primary">
          <Container>
            {/* Lien pour revenir à la page d'accueil */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <h3>Accueil</h3>
            </Link>
          </Container>
        </Navbar>
        <h4>Film non trouvé</h4>
      </div>
    );
  }

  // Si le film est trouvé, afficher ses détails
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <h2>Bande Annonce</h2>
      {/* Composant ReactPlayer pour afficher la bande annonce */}
      <ReactPlayer
        url={movie.trailerUrl}
        width="560"
        height="315px"
        title="YouTube video player"     
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  );
};

export default Description; // Exportation du composant Description

