import styled from "styled-components";

export const ModeloTitulo = styled.div`
  background: linear-gradient(45deg,#cb356b,#bd3f32);
  color: white;
  padding: 32px;
`;
export const TituloNome = styled.div`
  font-size: 32pt;
  margin-top: 96px;
`;
export const TituloData = styled.div`
  font-size: 16pt;
  margin-top: 8px;
`;
export const Input = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 10px;
  margin: 10px auto;
`;
export const Botao = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 10px; 
  margin: 10px;
  background-color: rgb(40, 232, 246);
  &:hover{
    background-color: rgb(68, 236, 248);
    cursor:pointer;
  }
`;
export const Task = styled.div`
  width: 100%;
  height: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  &:hover{
    border: 2px solid black;
  }
`;
export const DivTasks = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-around;
`;