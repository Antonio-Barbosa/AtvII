/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { Link } from "react-router-dom";


type props = {
    tema: string
}

export default class AtualizaProduto extends Component<props> {
    
    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }

    render() {
        return(
            <div className="containerProd">
                            <div className="row ">
                                <h4>Cadastro de Produto</h4>
                                <form className="col s12 formProd">
                                    <div className="row">
                                        <div className="input-field col s6 ">
                                            <input  id="Nome_produto"  type="text" className="validate" />
                                            <label className='active' htmlFor="Nome_produto">Nome Produto</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input  id="Descricao_produto" type="text" className="validate" />
                                            <label className='active' htmlFor="Descricao_produto">Descrição do Produto</label>
                                        </div>                           
                                    </div>

                                    <div className="row">

                                        <div className="input-field col s6">
                                            <input  id="Valor_produto" type="text" className="validate"/>
                                            <label className='active' htmlFor="Valor_produto">Valor do Produto</label>
                                        </div>                           
                                    </div>                        
                                    <div className="row">
                                        <div className="col s12 center">
                                            <Link to={'/Produtos'}>
                                            <button className="btn waves-effect waves-light black lighten-2" type="submit" name="action">Atualizar Produto
                                            </button></Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

        )}}