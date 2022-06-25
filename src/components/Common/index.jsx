import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  width: 500px;
  padding: 10rem;
  background-color: rgba(150,150,150, 0.1);
  border-radius: 10px;
`

export const Label = styled.label`
  font-size: 18rem;
  color: whitesmoke;
  margin-bottom: 5rem;
`

export const Input =  styled.input`
  padding: 5rem;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 5rem;
`

export const Select = styled.select`
  padding: 5rem;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 5rem;
`

export const Button = styled.button`
  color: white;
  background-color: --color-primary-medium;
  font-size: 28rem ;
`