import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DivLista } from "../styled";
import {FaEdit, FaTrash} from "react-icons/fa"

const ListaServico = ()=>{

    const [servicos, setServicos] = useState([])

    useEffect(()=>{
        fetch("/rest/servico").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setServicos(resp);
            console.log(resp)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const handleDelete = (id)=>{
        fetch("/rest/servico/"+id,{
            method: "delete"
        }).then(()=>{
            window.location = "/"
        }).catch((error)=>{
            console.log(error)
        })
    }



    return(
        <DivLista>
            <h1>Lista de Serviços</h1>

            <Link to='/incluir'>Inserir Produto</Link>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Distancia (Km)</th>
                        <th>Alterar</th>
                    </tr>
                </thead>
                <tbody>
                    {servicos.map((servico)=>(
                        <tr key={servico.codigo}> 
                            <td><p>{servico.titulo}</p></td>
                            <td><p>{servico.valor}</p></td>
                            <td><p>{servico.distancia}</p></td>
                            <td>
                                <Link title='Editar' to={`/editar/${servico.codigo}`} className='editar'><FaEdit/></Link>
                                <button title='Excluir' onClick={handleDelete.bind(this, servico.codigo)}><FaTrash/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr><td colSpan='4'>Serviços do Servidor</td></tr>
                </tfoot>
            </table>
        </DivLista>
    )
}
export default ListaServico;