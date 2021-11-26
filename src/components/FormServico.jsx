import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaRegTimesCircle } from "react-icons/fa";
import { DivForm } from "../styled";

const FormServico = props=>{

    let id = null;

    if(props.match.path.toLowerCase().includes('editar')){
        id = props.match.params.id;
    }

    const [novo, setNovo] = useState({
        codigo: id,
        titulo:"",
        valor:"",
        distancia:""
    })

    let metodo = "post"
    if(id){
        metodo="put"
    }

    const handleChange = e=>{
        setNovo({...novo,[e.target.name]: e.target.value})
    }

    const handleSubmit = e=>{
        e.preventDefault()
        fetch("/rest/servico/"+(id ? id : ""),{
            method: metodo,
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = "/"
        })
    }

    useEffect(()=>{
        if(id){
            fetch("/rest/servico/"+id)
            .then(resp=>{
                return resp.json()
            }).then(resp=>{
                setNovo(resp)
            })
        }
    },[id])

    return(
        <DivForm>
            <h1>Formulário de Serviços</h1>
            <div className='formulario__completo'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="titulo" value={novo.titulo} placeholder="Título" onChange={handleChange}/> <br/>
                    <input type="number" name="valor" value={novo.valor} placeholder="Valor" onChange={handleChange} step="0.1"/><br/>
                    <input type="number" name="distancia" value={novo.distancia} placeholder="Distância" onChange={handleChange}/>
                    <div className='botoes'>
                        <button type="submit"><FaLocationArrow/> Enviar</button>
                        <Link to='/'><FaRegTimesCircle/> Cancelar</Link>
                    </div>
                </form>
            </div>
        </DivForm>
    )
}

export default FormServico;

