import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchGames} from '../functions/libraryFunctions';
import GamesInput from '../components/GamesInput';