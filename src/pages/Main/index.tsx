import { Button, Container, Form, Input, Logo, Title } from './styles'
import githublogo from '../../assets/images/github-logo.svg';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';

const Main = () => {
  const [login , setLogin] = useState('');
  return (
    <Container>
      <Logo src={githublogo} alt='Dev'/>
      <Title>API-Github</Title>
      <Form>
        <Input
        placeholder='usuario'
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={48} color='white'/>
        </Button>
      </Form>
    </Container>
  )
}
export default Main;
