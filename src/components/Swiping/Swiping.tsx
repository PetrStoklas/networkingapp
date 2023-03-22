import React from 'react';
import { useGetRecommendations } from '../../api/users';
import SwipingView from './SwipingView';

const Swiping = () => {
  const { data: recommendations = [], isLoading } = useGetRecommendations();

  const onSwipe = (direction: string) => {
    console.log('You swiped: ' + direction);
  };

  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <SwipingView data={recommendations} isLoading={isLoading} onSwipe={onSwipe} onCardLeftScreen={onCardLeftScreen} />
  );
};

export default Swiping;
