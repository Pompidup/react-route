import React from 'react';
import { Route, Link } from "react-router-dom";

function Topics({ match }) {
    console.log(match)
    /*match est un objet qui contient des informations sur chemin d'accès correspondant à l'URL.
     Les objets match contiennent les propriétés suivantes:
    params - (objet)  clé/valeur recuperées à partir de l'URL correspondant aux segments dynamiques du chemin
    isExact - (boolean) vrai si la totalité de l'URL a été vérifiée
    path - (string) Le modèle utilisé pour faire correspondre.
    url - (string) La partie correspondante de l'URL.
    */
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {/*
        Link to= remplace les balises <a href>
        Ici match.url permet de récupérer l'url puis on ajoute notre nouveau chemin /xxxx
                */}
                <li>
                    <Link to={`${match.url}/magalie`}>Experte React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/antoine`}>Expert html/css/SCSS</Link>
                </li>
            </ul>
            {/*
                 Ici Route va permettre d'afficher le topic correpsondant au chemin. 

                */}
            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    console.log(match)
    return (
        <div>
            <h3>{match.params.topicId}</h3>
            <ul>
                <li>
                    <Link to="/Topics">Back to Topics</Link>
                </li>
            </ul>
        </div>
    );
}

export default Topics;