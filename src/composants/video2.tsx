import { useEffect, useState } from 'react';
import axios from 'axios';
import * as React from 'react';
import ReactPlayer from "react-player";

function VideoComponent() {
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/video/getAllVideos');
                const data = response.data;
                console.log(data);
                setVideoData(data);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des données de l\'API:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {/* En-tête Bootstrap */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="/images/ukraine.png" // Remplacez "votre-logo.png" par le nom de votre fichier image
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        Lviv
                    </a>
                </div>
            </nav>
            <div className="container mt-4">
                <h1>Données vidéo</h1>
                <ul className="list-group mt-4">
                    {videoData.map(video => (
                        <li key={video.id} className="list-group-item">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h5>Titre: {video.nom}</h5>
                                    <p>Id: {video.id}</p>
                                    <a href={video.lien_youtube} target="_blank" rel="noopener noreferrer">Voir sur YouTube</a>
                                </div>
                                <div className="ml-3">
                                    <ReactPlayer url={video.lien_youtube} width="200px" height="150px" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Pied de page Bootstrap */}
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <span className="text-muted">
                    © {new Date().getFullYear()} For-Ukraine
                    <img
                        src="/images/ukraine.png" // Remplacez "votre-logo.png" par le nom de votre fichier image
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                    Lviv
                </span>
            </footer>
        </div>
    );
}

export default VideoComponent;
