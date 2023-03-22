import { Surface, Text } from 'react-native-paper';
import styles from './styles';
import TinderCard from 'react-tinder-card';
import { Image } from 'react-native';
import React, { FC } from 'react';
import { Recommendation } from '../../api/users';

interface SwipingViewProps {
  data: Recommendation[];
  isLoading: boolean;
  onSwipe: (direction: string) => void;
  onCardLeftScreen: (direction: string) => void;
}

const SwipingView: FC<SwipingViewProps> = ({ data: recommendations, isLoading, onSwipe, onCardLeftScreen }) => {
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!recommendations?.length) {
    return <Text>No more...</Text>;
  }

  return (
    <Surface style={styles.mainWrap}>
      {recommendations.map((recommendation) => {
        return (
          <TinderCard
            key={recommendation.name}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen(recommendation.name)}
            preventSwipe={['up', 'down']}
          >
            <Surface style={styles.card}>
              <Image
                source={{ uri: recommendation?.images?.length ? recommendation.images[0] : '' }}
                style={styles.image}
              />
              <Surface style={styles.infoPanel}>
                <Surface style={styles.leftColumnInfoPanel}>
                  <Surface style={styles.nameAndAge}>
                    <Text style={styles.name}>{recommendation.name}</Text>
                    <Text style={styles.age}>{'29'}</Text>
                  </Surface>
                  <Text numberOfLines={2} ellipsizeMode="tail" style={styles.bio}>
                    {recommendation.bio}
                  </Text>
                </Surface>
              </Surface>
            </Surface>
          </TinderCard>
        );
      })}
    </Surface>
  );
};

export default SwipingView;
