import firestore from '@react-native-firebase/firestore';

export enum GenderType {
  female = 'female',
  male = 'male',
}

export interface NewUser {
  name?: string;
  // @ts-ignore // TODO:
  dateOfBirth?: firestore.Timestamp;
  bio?: string;
  gender?: GenderType;
  targetGender?: GenderType;
  images?: {
    name: string;
    data: string;
    type: string;
  }[];
}
