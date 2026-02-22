import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React from 'react'

//Import das imagens
import Logo from "../../assets/logo.png"
import ImgPerfil from "../../assets/FotoPerfil.png"

//Import dos componentes
import Inicio from "../Inicio/Inicio"
import Acoes from "../Acoes/Acoes"
import QuemSomos from "../QuemSomos/QuemSomos"
import Perfil from "../Perfil/Perfil"

import Styles from "./NavBar.module.scss"


export default function NavBar() {
    return (
        <BrowserRouter>
            <nav className={Styles.NavBarHeader}>
                <Link to='/'className={Styles.Logo}>
                    <img src={Logo} alt="Logo do projeto" />
                </Link>
                <ul className={Styles.ListaNavBar}>
                    <li>
                        <Link className={Styles.ListaItemNavBar} to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link className={Styles.ListaItemNavBar} to='/acoes'>Ações da Connect</Link>
                    </li>
                    <li>
                        <Link className={Styles.ListaItemNavBar} to='/quemSomos'>Quem Somos</Link>
                    </li>
                </ul>
                <Link to='/perfil' className={Styles.Perfil}>
                    <img src={ImgPerfil} alt="Foto de perfil" className={Styles.ImgPerfil}/>
                </Link>
            </nav>


            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/acoes' element={<Acoes />} />
                <Route path='/quemSomos' element={<QuemSomos />} />
                <Route path='/perfil' element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    )
}

