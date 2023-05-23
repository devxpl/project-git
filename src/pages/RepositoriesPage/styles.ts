import styled from 'styled-components'

// Estilo para o contêiner principal
export const Container = styled.main`
   display: flex; // Define o contêiner como um flex container
   min-height: 100vh; // Define a altura mínima como 100% da altura da viewport

   @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
      flex-direction: column; // Altera a direção do flex container para coluna em dispositivos com largura máxima definida no tema
   }
`;

// Estilo para a barra lateral
export const Sidebar = styled.aside `
  background: ${(props)=> props.theme.colors.background}; // Define o fundo da barra lateral com base na cor de fundo definida no tema
  min-width: 20rem; // Define a largura mínima da barra lateral como 20 rem
  max-height:100vh; // Define a altura máxima da barra lateral como 100% da altura da viewport
  overflow-y:hidden; // Esconde o conteúdo verticalmente que exceder a altura da barra lateral
`

// Estilo para o conteúdo principal
export const Main = styled.section`
  background: ${(props)=> props.theme.colors.container}; // Define o fundo do conteúdo principal com base na cor de contêiner definida no tema
  width: 100%; // Define a largura como 100% do contêiner pai
  height: 100vh; // Define a altura como 100% da altura da viewport
  padding: 40px; // Adiciona preenchimento interno de 40px em todas as direções
  overflow-y: hidden; // Esconde o conteúdo verticalmente que exceder a altura do conteúdo principal

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
     height:100%; // Define a altura como 100% do contêiner pai em dispositivos com largura máxima definida no tema
   }

   @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
      padding: 40px 20px; // Adiciona preenchimento interno de 40px no topo e na base, e 20px nas laterais em dispositivos com largura máxima definida no tema
   }
`
export const SlideContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const SlideItem = styled.div`
  min-height: 100px;
  color: #fff;
`;

export const Slide1 = styled(SlideItem)`

`;

export const Slide2 = styled(SlideItem)`
`;

export const Slide3 = styled(SlideItem)`

`;
