import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail'
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => {

    return (
        <Router>
            <nav className='nav-wrapper teal'>
                <Link to="/" className='brand-logo center'>Pokédex</Link>
            </nav>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<PokemonList />}></Route>
                    <Route path="/pokemons" element={<PokemonList />}></Route>
                    <Route path="/pokemons/:id" element={<PokemonsDetail />}></Route>
                    <Route path="/pokemons/edit/:id" element={<PokemonEdit />}></Route>
                    <Route path="/pokemons/add" element={<PokemonAdd />}></Route>
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </Router>
    )
}

export default App;