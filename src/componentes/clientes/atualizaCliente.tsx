/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { Link } from "react-router-dom";


type props = {
    tema: string
}

export default class AtualizaCliente extends Component<props> {
    
    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }

    render() {
        return(
            <div className="containerCli">
                <div className="row ">
                <h4>Atualizar Dados Cliente</h4>
                    <form className="col s12 formCli">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input  id="Nome" type="text" className="validate" />
                                <label className='active' htmlFor="Nome">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input  id="Nome_Social" type="text" className="validate" />
                                <label className='active' htmlFor="Nome_Social">Nome social</label>
                            </div>                           
                        </div>

                        <div className="row">
                         
                            <div className="input-field col s6">
                                <input id="Telefone" type="text" className="validate" />
                                <label className='active' htmlFor="Telefone">(DDD) Telefone</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="col s12 center ">
                            <Link to={'/Cliente'}>
                                <button className="btn waves-effect waves-light black " type="submit" name="action">Atualizar Cliente
                                </button>
                            </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}