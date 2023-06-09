import React, { createContext, useState, ReactNode, FC, useContext, useCallback, useMemo } from 'react';
import { RegistrationStateType } from './types';
import { NewUser } from '../../types/user';
import functions from '@react-native-firebase/functions';

const RegistrationContext = createContext<RegistrationStateType>({
  userState: null,
  setUserState: null,
  onSubmit: null,
  updateUserState: null,
  dataUploading: false,
});

const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);

  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider');
  }

  return context;
};

const RegistrationContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userState, setUserState] = useState<NewUser>({});
  const [dataUploading, setDataUploading] = useState(false);

  const updateUserState = useCallback((newData: NewUser) => {
    setUserState((prevState: NewUser) => ({ ...prevState, ...newData }));
  }, []);

  const onSubmit = useCallback(async () => {
    setDataUploading(true);
    try {
      console.log('userState');
      console.log(userState.bio);
      console.log(userState.name);
      console.log(userState.gender);
      console.log(userState.targetGender);
      console.log(userState.dateOfBirth);
      await functions().httpsCallable('updateUserProfile')({
        ...userState,
      });
    } catch (err) {
      console.log('error when submitting registration form');
      console.log(err);
    }
    setDataUploading(false);
  }, [userState]);

  // TODO: maybe not necessary idk im tired
  const value = useMemo(
    () => ({
      userState,
      setUserState,
      onSubmit,
      updateUserState,
      dataUploading,
    }),
    [userState, onSubmit, updateUserState, dataUploading]
  );

  return <RegistrationContext.Provider value={value}>{children}</RegistrationContext.Provider>;
};

export { useRegistrationContext, RegistrationContextProvider };
