import styled from "styled-components";

export const DivLista = styled.div`
    width: 70%;
    margin: auto;
    font-family: Arial;

    h1{
        text-align: center;
        font-family: cursive;
        text-decoration: underline;
    }
    a{
        text-decoration: none;
        padding: 10px 15px;
        margin-bottom: 20px;
        background-color: #3CB371;
        color: white;
        display: inline-block;
        transition: .3s;
    }
    a{
        background-color: #3CB371;
    }
    a:hover{
        background-color: #2E8B57;
    }
    .editar:hover{
        border-radius: 100%;
        background-color: rgba(1000,1000,1000,.2);
    }
    table{
        width: 100%;
        position: relative;
        border-collapse: collapse;
    }
    table tr td{
        border: 2px solid rgba(0,0,0,.2);
    }
    thead tr{
        background-color: #8B0000;
        color: white;
    }
    thead tr th{
        padding: 10px;
        border: 2px solid rgba(0,0,0,.2);
    }
    tbody tr:nth-child(2n+2){
        background-color: #ccc;
    }
    tbody tr:hover{
        background-color: rgba(0,0,0,.5);
        p{
            color: white;
        }
    }
    tbody tr td a{
        background: none;
        margin-bottom: 5px;
        color: blue;
    }
    tbody tr td p{
        padding-left: 10px;
        width: 100%;
        line-height: 100%;
    }
    tbody tr td button{
        color: red;
        background: none;
        border: none;
        padding: 10px;
    }
    tbody tr td button:hover{
        cursor: pointer;
        background-color: rgba(255,0,0,.2);
        border-radius: 100%;
    }
    tfoot tr td{
        text-align: center;
        background-color: #333;
        color: white;
    }
`

export const DivForm = styled.div`
    background-color: #8B0000;
    border-radius: 4px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    left: 50%;
    max-width: 600px;
    opacity: 1;
    padding: 15px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65%; 

    h1{
        position: relative;
        text-align: center;
        font-family: cursive;
        color: #fff;
    }
    .formulario__completo{
        width: 80%;
        margin: auto;
    }
    form input{
        color: black;
        font-family: cursive;
        width: 100%;
        margin: 0.2rem;
        line-height: 45px;
    }
    .botoes{
        width: 100%;
        padding: 1px 2px;
        text-align: center;
        display: flex;
        justify-content:space-around;
        margin: 0.175rem;
    }
    a{
        background-color: rgba(255, 0, 0, .6);
        color: white;
        text-decoration: none;
        padding: 5px;
        display: block;
        transition: .2s;  
    }
    a:hover{
        background-color: rgba(255, 0, 0, 1);
    }
    button{
        color: white;
        background: rgba(0, 255, 0, .6);
        border: none;
        display: inline-block;
        padding: 6px;
        transition: .2s;
    }
    button:hover{
        cursor: pointer;
        background-color: rgba(0, 255, 0, 0.9);
    }
`