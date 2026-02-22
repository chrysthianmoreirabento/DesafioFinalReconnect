import ImgTelaInicial from "../../assets/img-tela-inicial.png"

import Styles from "../Inicio/Inicio.module.scss"
import React from 'react'

export default function Inicio() {
  return (
    <section className={Styles.SecaoInicio}>
      <div className={Styles.TextosIniciais}>
        <h1>Projetos Sociais que transformam</h1>
        <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
      </div>
      <img src={ImgTelaInicial}alt="Imagem de um globo com crianças feita de papel envolta sendo apoiadas por duas mãos." />
    </section>

  )
}
