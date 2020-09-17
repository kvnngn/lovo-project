import React from 'react';
import './App.css';
import ArticlesList from "./views/pages/articlesList/articlesList";
import SearchBar from "./views/components/searchBar/searchBar";
import Container from "react-bootstrap/cjs/Container";

function App() {
    return (
        <div className="App">
            <Container>
                <h1>Articles from New York Times</h1>
                <ArticlesList/>
            </Container>
        </div>
    );
}

export default App;
