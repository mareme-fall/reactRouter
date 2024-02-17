import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Filtre = ({ onFilterChange }) => {
    const [titreFiltre, setTitreFiltre] = useState('');
    const [noteFiltre, setNoteFiltre] = useState('');

    const handleChangeTitre = (event) => {
        setTitreFiltre(event.target.value);
    };

    const handleChangeNote = (event) => {
        setNoteFiltre(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilterChange({ titre: titreFiltre, note: noteFiltre });
    };

    return (
        <Form className='film-form' onSubmit={handleSubmit}>
            <Form.Group controlId='formTitre'>
                <Form.Label>Filtrer par titre :</Form.Label>
                <Form.Control type="text" value={titreFiltre} onChange={handleChangeTitre} />
            </Form.Group>
            <Form.Group controlId='formNote'>
                <Form.Label>Filtrer par note :</Form.Label>
                <Form.Control type="text" value={noteFiltre} onChange={handleChangeNote} />
            </Form.Group>
            <Button type="submit">Filtrer</Button>
        </Form>
    );
};

export default Filtre;
