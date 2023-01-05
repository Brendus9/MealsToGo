import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const ResturantCard = styled(Card)`
  background-color: white;
`;

const CardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: ${props => props.theme.colors.ui.primary};
`;

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "brendus se plek",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "bowker",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = resturant;

  return (
    <ResturantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </ResturantCard>
  );
};
