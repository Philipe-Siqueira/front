import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';
import Header from '../Components/Header';


export default function DashBoard(props) {
  return (
    <div>
      <Header />
      
      
      <Link to="/" className="btn btn-dark">Inicio</Link>
    </div>
  );
}
