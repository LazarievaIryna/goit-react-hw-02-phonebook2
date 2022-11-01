import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  padding: 10px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  padding: 5px;
  margin-top: 10px;
  width: fit-content;
`;
export const BtnAdd = styled.button`
  width: fit-content;
  height: auto;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 3px;
`;
