import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Wrapper = styled.ScrollView``;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const StoriesContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16,
  },
}))`
  background: #f0f0f7;
  height: 100px;
`;

export const Storie = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #e1306c;
  margin-right: 10px;
`;
