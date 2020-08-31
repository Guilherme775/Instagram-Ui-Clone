import React from "react";

import {
  Container,
  PostHeader,
  PostHeaderContainer,
  Avatar,
  Name,
  Img,
  Reactions,
  IconsContainer,
  LikesContainer,
  LikeAvatar,
  LikeText,
  Comments,
  CommentName,
  CommentContent,
} from "./styles";

import avatar from "../../assets/randomAnimeBoy.jpg";

import { Feather } from "@expo/vector-icons";

const Post: React.FC = () => {
  return (
    <Container>
      <PostHeader>
        <PostHeaderContainer>
          <Avatar source={avatar} />
          <Name>Guilherme</Name>
        </PostHeaderContainer>
        <Feather name="more-vertical" size={20} color="#333" />
      </PostHeader>
      <Img source={avatar} />
      <Reactions>
        <IconsContainer>
          <Feather name="heart" size={20} color="#333" />
          <Feather name="message-circle" size={20} color="#333" />
          <Feather name="send" size={20} color="#333" />
        </IconsContainer>
        <Feather name="bookmark" size={20} color="#333" />
      </Reactions>
      <LikesContainer>
        <LikeAvatar source={avatar} />
        <LikeText>Curtido por Guilherme e outras 100 pessoas.</LikeText>
      </LikesContainer>
      <Comments>
        <CommentName>Guilherme: </CommentName>
        <CommentContent>whatever</CommentContent>
      </Comments>
    </Container>
  );
};

export default Post;
