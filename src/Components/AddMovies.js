import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddMovies = ({ onAddMovies }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Vérifiez si les champs requis sont remplis
        if (title && description && note) {
            // Créez un nouvel objet film
            const newMovie = {
                title: title,
                description: description,
                note: parseInt(note)
            };
            // Appelez la fonction de rappel pour ajouter le nouveau film
            onAddMovies(newMovie);
            // Réinitialisez les champs du formulaire
            setTitle("");
            setDescription("");
            setNote("");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Titre du film :</Form.Label>
                <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description du film :</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="note">
                <Form.Label>Note du film :</Form.Label>
                <Form.Control
                    type="number"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
            </Form.Group>
            <Button type="submit">Ajouter</Button>
        </Form>
    );
};

export default AddMovies;
