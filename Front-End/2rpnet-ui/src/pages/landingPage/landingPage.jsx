import { Component } from 'react';
import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';
import VLibras from '@djpfs/react-vlibras'


//img:
import Logo from '../../assets/img/logo2RP.png'
import Robo from '../../assets/img/roboLandingPage.png'
import Financas from '../../assets/img/financas.png'
import Banco from '../../assets/img/banco.png'
import Admin from '../../assets/img/admin.png'
import PageRepresentation from '../../assets/img/pageRepresentation.png'

//Components:
import Footer from '../../components/footer/footer'

//css:
import '../../assets/css/pages/landingPage.css'
import '../../assets/css/components/button.css'
import '../../assets/css/components/fonts.css'

export default function LandingPage() {

    return (
        <div>
            <VLibras/>
            <div className='landingPage'>
                <div className='header container'>
                    <div className='headerInside container'>
                        <img src={Logo} alt="Logo 2RP" />
                        <div className='headerNav'>
                            <Link to="/login"><span className='loginLanding h6' alt="Login">Login</span></Link>
                            <Link to="/registerUser"><button className='button-landingPage button h6' id='buttonSignUp' alt="Inscreva-se">Inscreva-se</button></Link>
                        </div>
                    </div>
                </div>
                <section className='container section'>
                    <div className='content content-landing'>
                        <h2 className='h2' alt="A melhor solução de automatização para qualquer empresa">A melhor solução de automatização para qualquer empresa</h2>
                        <h6 className='h6' alt="Não perca tempo, automatize os processos dentro da sua empresa com qualidade e confiança">Não perca tempo, automatize os processos dentro da sua empresa com qualidade e confiança</h6>
                        <Link to="/registerUser"><button className='button h5' alt="Teste agora">Teste Agora</button></Link>
                    </div>
                    <img src={Robo} alt="Imagem robô" />
                </section>
                <section className='section section2'>
                    <div className='container section2Content'>
                        <h3 className='h3' alt="Áreas de atendimento">Áreas de atendimento</h3>
                        <div className='articleArea'>
                            <article>
                                <img src={Financas} alt="Imagem Finanças" />
                                <h5 alt="Finanças">Finanças</h5>
                                <p className='p' alt="Possíveis soluções na área de finanças para o desempenho do seu negócio">Possíveis soluções na área de finanças para o desempenho do seu negócio</p>
                            </article>
                            <article>
                                <img src={Banco} alt="imagem Banco" />
                                <h5 alt="Banco">Banco</h5>
                                <p className='p' alt="Através da automação, tarefas no setor bancário são feitas em tempo reduzido com qualidade">Através da automação, tarefas no setor bancário são feitas em tempo reduzido com qualidade</p>
                            </article>
                            <article>
                                <img src={Admin} alt="Imagem Administração" />
                                <h5 alt="Administração">Admin</h5>
                                <p className='p'>A área de Administração leva demandas que são facilmente simplificadas através da aplicação</p>
                            </article>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <div className='container section3'>
                            <h3 className='h3 bold'>Não deixe que a codificação o atrapalhe</h3>
                            <h5 className='h5 sectionH5'>Crie todos os campos, tabelas, painéis e automações com arrastar, soltar e clicar.</h5>
                            <div className='section3Conteint'>
                                <img className='pageRepresentation' src={PageRepresentation} alt="" />
                                <div className='textConteint'>
                                    <p>Crie os seus próprios assistentes através do fluxo de automação de acordo com as suas necessidades. Com diversas funcionalidades que podem atuar em qualquer área, é possível rodar os assistentes quando for necessário</p>
                                    <Link to="/registerUser"><button className='button'>Começar</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}
