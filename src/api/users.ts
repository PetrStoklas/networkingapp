import firestore from '@react-native-firebase/firestore';
import { GenderType } from '../types/user';
import { useQuery } from 'react-query';

export interface Recommendation {
  name: string;
  bio: string;
  dateOfBirth: any;
  sexualOrientation: GenderType;
  images: string[];
}

export const useGetRecommendations = () =>
  useQuery<Recommendation[], Error>('recommendations', async () => {
    const data = await firestore().collection('Users').get();
    return data.docs.map((doc) => doc.data()) as unknown as Recommendation[];
  });
