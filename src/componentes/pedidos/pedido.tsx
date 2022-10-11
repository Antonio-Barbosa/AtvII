/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'


type props = {
    tema: string
}

export default class Pedido extends Component<props> {
    
    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }

    render() {
        return(
            <div className="containerPed">

            <h2>Pedido de Id</h2>

                <div>
                <h4 className='pedFont'><strong>Produto</strong></h4>
                    <table className='responsive-table centered espacamento-tabela'>
                        <thead>
                        <tr>
                            <th>Id do Pedido</th>
                            <th>Id do Produto</th>
                            <th>Nome do Produto</th>
                            <th>Valor do Produto</th>

                        </tr>
                        </thead>
                        <tbody>


                        <tr>
                           <td><strong></strong></td>
                           <td><strong></strong></td>
                           <td></td>
                           <td></td>
                        </tr>                          

                        </tbody>
                    </table>
                </div>

                <div>
                    <h4 className='pedFont'><strong>Serviço</strong></h4>
                    <table className='responsive-table centered espacamento-tabela'>
                            <thead>
                            <tr>
                                <th>Id do Pedido</th>
                                <th>Id do Serviço</th>
                                <th>Nome do Serviço</th>
                                <th>Valor do Serviço</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td><strong></strong></td>
                                <td><strong></strong></td>
                                <td></td>
                                <td></td>
                            </tr>                          

                            </tbody>
                        </table>
                </div>

                <div>
                    <h4 className='pedFont'><strong>Cliente do Pedido</strong></h4>
                    <table className='responsive-table centered espacamento-tabela'>
                            <thead>
                            <tr>
                                <th>Id do Cliente</th>
                                <th>Nome do Cliente</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td><strong></strong></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>                          

                            </tbody>
                        </table>
                </div>

                <button className="btn waves-effect waves-light black lighten-2 botaoCancela" type="submit" name="action">Cancelar Pedido</button>


        </div>

 )}}