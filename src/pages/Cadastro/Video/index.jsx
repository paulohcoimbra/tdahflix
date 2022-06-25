import React from 'react';
import data from '../../../data/dados_iniciais.json'

import { Label, Input, Select, FormContainer, Form, Button } from '../../../components/Common'
import ButtonTdha from '../../../components/ButtonTdah'

import { useState } from 'react';

const getCategories = () => {
  return data.categories.map(c => {
    return <option value={c.title}>{c.title}</option>
  })
}

export default function CadastroVideo() {
  
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  
  const handleChange = (event) => {
    
  }
  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label for="category" >Category</Label>
          <Select name="category" id="category">
            {getCategories()}
          </Select>
          
          <Label for="title" >Title</Label>
          <Input type="text" id="title"/>
          
          <Label for="url" >Url</Label>
          <Input type="text" id="url"/>

          <Label for="src" >Image Url</Label>
          <Input type="text" id="src"/>

          <Label for="alt" >Image Description</Label>
          <Input type="text" id="alt"/>

          <Label for="avatar" >Avatar Url</Label>
          <Input type="text" id="avatar"/>

          <Label for="channel" >Channel Name</Label>
          <Input type="text" id="channel"/>

          <Label for="videoTime" >Video Time</Label>
          <Input type="text" id="videoTime"/>

          <ButtonTdha>Salvar</ButtonTdha>
        </Form>
      </FormContainer>
    </>
  );
}
