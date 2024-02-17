import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importation de BrowserRouter et Routes
import "bootstrap/dist/css/bootstrap.css"; // Importation des styles Bootstrap
import Home from "./Components/Home"; // Importation du composant Home
import Description from "./Components/Description"; // Importation du composant Description

function App() {
  // Fonction principale de l'application
  return (
    <Router> {/* Envelopper toute l'application avec le composant Router */}

    <div>

      {/* Composant de routage pour gérer les différentes pages */}
      <Routes>
        {/* Route par défaut pour la page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Route pour afficher la description d'un film en fonction de son ID */}
        <Route path="/movie/:id" element={<Description />} />

      </Routes>
    </div>
    </Router>

  );
}

export default App; // Exportation du composant App
