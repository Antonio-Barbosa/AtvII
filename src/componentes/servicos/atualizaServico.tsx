/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { Link } from "react-router-dom";


type props = {
    tema: string
}

export default class AtualizaServico extends Component<props> {
    
    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }

    render() {
        return(
            <div className="containerServ">
                <div className="row ">
                <h4>Cadastro de Serviço</h4>
                    <form className="col s12 formServ ">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="Nome_Servicos" type="text" className="validate" />
                                <label className="active" htmlFor="Nome_Servicos">Nome do Serviços</label>
                            </div>
                            <div className="input-field col s6">
                                <input  id="Descricao_servico" type="text" className="validate" />
                                <label className="active" htmlFor="Descricao_servico">Descrição do serviço</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input  id="Valor_Servico" type="text" className="validate"/>
                                <label className="active" htmlFor="Valor_Servico">Valor do Serviço</label>
                            </div>                          
                        </div>

                        <div className="row">
                            <div className="col s12 center">
                                <Link to={'/Servicos'}>
                                    <button className="btn waves-effect waves-light black lighten-2" type="submit" name="action" >Atualizar Serviço
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )}}