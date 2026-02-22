
import FotoDePerfil from "../../assets/FotoPerfil.png"
import Styles from "./Perfil.module.scss"

import React from 'react'

export default function Perfil() {
  return (
    <section>
      <article className={Styles.SectionPerfil}>
        <img src={FotoDePerfil} alt="Foto de Perfil" className={Styles.FotoPerfil} />
        <div className={Styles.DescricaoPerfil} >
          <h2>Chrysthian Moreira Bento </h2>
          <h4>Voluntário Ativo</h4>
          <p className={Styles.TextoDescricao}>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem 
            transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
          <address className={Styles.Endereco}>
              <p className={Styles.EnderecoItem}>Osasco, SP</p>
              <p className={Styles.EnderecoItem}>bentochrysthian@gmail.com</p>
              <p className={Styles.EnderecoItem}> Membro desde setembro de 2025</p>
          </address>
          <ul className={Styles.ListTags}>
            <li className={Styles.ListTagsItens}>Educação</li>
            <li className={Styles.ListTagsItens}>Meio Ambiente</li>
            <li className={Styles.ListTagsItens}>Assistência Social</li>
            <li className={Styles.ListTagsItens}>Design</li>
          </ul>
        </div>
      </article>
    </section>
  )
}

