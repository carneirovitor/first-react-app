import React from 'react';

import { FaGithubAlt } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';
export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt/>
        Repositórios
      </h1>

    <Form onSubmit={ () => {}}>
      <input
        type="text"
        placeholder="Adicionar Repositório">
      </input>

    <SubmitButton disabled>
      <faPlus color="#FFF" size={14} />
    </SubmitButton>

    </Form>

    </Container>



  );
}
