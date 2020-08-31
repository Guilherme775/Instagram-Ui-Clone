import React from "react";

import {
  Container,
  Wrapper,
  Header,
  Title,
  StoriesContainer,
  Storie,
} from "./styles";

import Post from "../../components/Post";

import avatar from "../../assets/randomAnimeBoy.jpg";

import { Feather } from "@expo/vector-icons";

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Feather name="camera" size={20} color="#333" />
          <Title>Instagram</Title>
          <Feather name="send" size={20} color="#333" />
        </Header>
        <StoriesContainer>
          <Storie source={avatar} />
          <Storie source={avatar} />
          <Storie source={avatar} />
          <Storie source={avatar} />
          <Storie source={avatar} />
          <Storie source={avatar} />
        </StoriesContainer>
        <Post />
        <Post />
        <Post />
      </Wrapper>
    </Container>
  );
};

export default Home;
