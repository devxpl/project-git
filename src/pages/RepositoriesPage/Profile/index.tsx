import { Avatar, Container, Login, Name,Header, Inner, Data } from './styles';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/106363031?v=4" />
        <Login>devxpl</Login>
        <Name> Afonso Henrique</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          100 seguidores 10 seguindo
        </Data>
        <Data>
          <MdWork size={20} />
          Developer
        </Data>
        <Data>
          <MdLocationCity size={20} />
          Paulinia - SP
        </Data>
        <Data>
          <MdLink size={20}/>
           <a href="www.google.com" >Portfólio</a></Data>
      </Inner>
    </Container>
  )
}

export default Profile;

