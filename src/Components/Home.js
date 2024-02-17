import React, { useState } from "react";
import Filtre from "./Filtre";
import MovieList from "./MovieList";
import AddMovies from "./AddMovies";
import moviesData from "../moviesData"; // Import du fichier de données de films
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom"; // Import de Link pour la navigation

const Home = () => {
    const [movies, setMovies] = useState(moviesData); // État pour stocker la liste des films
    const [filteredMovies, setFilteredMovies] = useState([]); // État pour stocker les films filtrés

    // Fonction pour ajouter un nouveau film à la liste
    const addMovies = (newMovie) => {
        setMovies([...movies, { id: movies.length + 1, ...newMovie }]);
    };

    // Fonction pour gérer les changements de filtre
    const handleFilterChange = (title, note) => {
        // Filtrer les films en fonction du titre et de la note
        const filteredMovies = movies.filter((film) =>
            film.title.toLowerCase().includes(title.toLowerCase()) &&
            film.note.toString().includes(note.toString())
        );
        // Mettre à jour la liste des films filtrés
        setFilteredMovies(filteredMovies);
    };

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

            {/* Titre et composant de filtrage */}
            <h2>Filtrer les films</h2>
            <Filtre onFilterChange={handleFilterChange} />

            {/* Titre et liste des films */}
            <h2>Liste des Films</h2>
            {/* Utilisation de la liste des films filtrés s'il y en a, sinon afficher tous les films */}
            <MovieList movies={filteredMovies.length ? filteredMovies : movies} />

            {/* Titre et composant pour ajouter un film */}
            <h2>Ajouter un film</h2>
            <AddMovies onAddMovies={addMovies} />
        </div>
    );
};

export default Home;
