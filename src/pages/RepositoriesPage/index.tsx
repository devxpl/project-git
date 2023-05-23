import React, { useState } from 'react';
import { Container , Sidebar , Main, SlideContainer,Slide1,Slide2,Slide3 } from './styles';
import Profile from './Profile';
import Filter from './Profile/Filter';
import SwipeableViews from 'react-swipeable-views';
import slide1 from '../../assets/images/slide.png';
import slide2 from '../../assets/images/slide2.gif';
import slide3 from '../../assets/images/slide3.gif';

const RepositoriesPage = () => {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (currentIndex: number) => {
    setIndex(currentIndex);
  };
  return (
    <Container>
       <Sidebar>
        <Profile />
        <Filter />
       </Sidebar>
     <Main>
      <SlideContainer>
       <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents>
        <Slide1><img src={slide1}/></Slide1>
        <Slide2><img src={slide2}/></Slide2>
        <Slide3><img src={slide3}/></Slide3>
       </SwipeableViews>
      </SlideContainer>
     </Main>
    </Container>
  )
}

export default RepositoriesPage;


