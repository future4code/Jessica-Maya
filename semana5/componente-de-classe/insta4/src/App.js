import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://i.pravatar.cc/150?img=2'}
          fotoPost={'https://picsum.photos/id/10/200/150'}
        />

       <Post
          nomeUsuario={'Ana Julia'}
          fotoUsuario={'https://i.pravatar.cc/150?img=1'}
          fotoPost={'https://picsum.photos/id/237/200/150'}
        /> 

        <Post
          nomeUsuario={'Gabriel'}
          fotoUsuario={'https://i.pravatar.cc/150?img=8'}
          fotoPost={'https://picsum.photos/id/290/200/150'}
        />  
      </MainContainer>
    );
  }
}

export default App;
