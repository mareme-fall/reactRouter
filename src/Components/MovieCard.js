import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
    const navigate = useNavigate();

    const handleWatchTrailer = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <Card className="card">
            <Card.Img variant="top" src={movie.posterUri} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    <p>Description: {movie.description}</p>
                    <p>Notes: {movie.note}/5</p>
                    {/* Bouton pour regarder la vidéo */}
                    <Button onClick={handleWatchTrailer}>Bande Annonce</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default MovieCard;