import React from 'react';
import { Asset } from 'react-native-image-picker';
import { NewUser } from '../../types/user';

export enum RegistrationRoutes {
  name = 'Name',
  birth = 'Birth',
  gender = 'Gender',
  sexOrientation = 'SexOrientation',
  bio = 'Bio',
  photosUpload = 'PhotosUpload',
  uploading = 'Uploading',
}

type GeneralAsyncFnType = () => Promise<void>;
type UpdateUserStateType = (newData: NewUser) => void;
export type RegistrationStateType = {
  userState: NewUser | null;
  setUserState: React.Dispatch<React.SetStateAction<NewUser>> | null;
  onSubmit: GeneralAsyncFnType | null;
  updateUserState: UpdateUserStateType | null;
  dataUploading: boolean;
};

export interface ImageGridDataItem {
  key: string | number;
  disabledDrag?: boolean;
  disabledReSorted?: boolean;
  data?: Asset;
}
