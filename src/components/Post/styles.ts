import styled from "styled-components/native";

export const Container = styled.View``;

export const PostHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 10px 0;
  margin-top: 10px;
`;

export const PostHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  font-family: sans-serif;
  font-size: 16px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 250px;
`;

export const Reactions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100px;
  justify-content: space-around;
`;

export const LikesContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LikeAvatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const LikeText = styled.Text`
  font-family: sans-serif;
  font-size: 16px;
`;

export const Comments = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  margin: 5px 0 10px 0;
`;

export const CommentName = styled.Text`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
`;

export const CommentContent = styled.Text`
  font-family: sans-serif;
  font-size: 16px;
`;
