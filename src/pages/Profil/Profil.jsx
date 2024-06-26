import React from "react";

import "./Profil.css";


import Navbar from '../../components/Navbar/Navbar';
import MiniNaw from '../../components/MiniNaw/MiniNaw';
import { Link } from 'react-router-dom';
import BreacdCrumbs from '../../components/BreadCrumbs/BreacdCrumbs';
import { Helmet } from "react-helmet-async";

const Profil = () => {
  return (
    <>
      <Helmet>
        <title>User Profil</title>
        <meta name="description" content="profil page" />
        <link rel="canonical" href="/profil" />
      </Helmet>
      <div className="container">
        <div className="profil-wrap">
          <Link to="/home/profile/user" className="profil-card user-card-mini">
            <p className="profil-text">Profil</p>
            <i className="bx fs-1 bx-user-circle"></i>
          </Link>
          <Link to="/home/profile/services" className="profil-card services-card-mini">
            <p className="profil-text">Services</p>
            <i className="bx fs-1  bx-server"></i>
          </Link>
          <Link
            to="/home/profile/announcement"
            className="profil-card annoumcommet-card-mini"
          >
            <p className="profil-text">My cottage</p>
            <i className="bx fs-1  bx-analyse"></i>
          </Link>
        </div>
      </div>
      <MiniNaw />
    </>
  );
};

export default Profil;
