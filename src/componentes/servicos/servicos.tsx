/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { Link } from "react-router-dom";


type props = {
    tema: string
}

export default class Servicos extends Component<props> {
    
    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }

    render() {
        let estiloBotao = `btn waves-effect  black lighten-2 button ${this.props.tema}`
        let estilo = `collection-item active  black lighten-2 ${this.props.tema}`
        return (
            <div className="containerServ">
        <h2 className="nomeServ">Escova</h2>
            <ul className="collapsible popout">
                {/* Serviços */}
                <li>
                    <div className="collapsible-header home"><i className="material-icons">work</i>Informações do Serviço</div>
                    <div className="collapsible-body">

                        <div className="input-field col s12">
                            <input disabled id="Descricao_servico" type="text"  className="validate"/>
                            <label className="active" htmlFor="Descricao_servico">Descrição do serviço</label>
                        </div>

                        <div className="input-field col s12">
                            <input disabled id="Valor_servico" type="text"  className="validate"/>
                            <label className="active" htmlFor="Valor_servico">Valor do serviço</label>
                        </div>

                        <div className="input-field col s12">
                            <input disabled id="Codigo_identificacao" type="text"  className="validate"/>
                            <label className="active" htmlFor="Codigo_identificacao">Código de identificação</label>
                        </div>

                    </div>
                </li>
            </ul>

            <div className="row">
                <div className="col s12 center">
                    <Link to ="/AtualizaServico">
                    <button className="btn waves-effect black lighten-2 button botaoAtualiza" type="submit" name="action">Atualizar</button>
                    </Link>
                    <button className="btn waves-effect black lighten-2 button" type="submit" name="action">Deletar Serviço</button>
                </div>
            </div>

        </div>
    )
}}