import React, { FC, useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import { dropRightWhile, dropWhile } from 'lodash';
import { asyncForEach } from '../../../helpers';
import RNFS from 'react-native-fs';
import { useRegistrationContext } from '../RegistrationState';
import { useNavigation } from '../../../hooks/useNavigation';
import { ImageGridDataItem, RegistrationRoutes } from '../types';
import PhotosUploadView from './PhotosUploadView';

interface ProfileImageInfo {
  file: string;
  order: number;
}

const PhotosUpload: FC = () => {
  const maxImages = 6;
  const navigation = useNavigation();
  const { updateUserState } = useRegistrationContext();

  const [data, setData] = useState<ImageGridDataItem[]>([
    { key: 1, disabledDrag: true, disabledReSorted: true },
    { key: 2, disabledDrag: true, disabledReSorted: true },
    { key: 3, disabledDrag: true, disabledReSorted: true },
    { key: 4, disabledDrag: true, disabledReSorted: true },
    { key: 5, disabledDrag: true, disabledReSorted: true },
    { key: 6, disabledDrag: true, disabledReSorted: true },
  ]);
  const slotsWithImage = dropRightWhile(data, (item: ImageGridDataItem) => !item.data);

  const handleChoosePhotos = async () => {
    const slotsWithoutImage = dropWhile(data, (item: ImageGridDataItem) => item.data);

    try {
      const responsne = await launchImageLibrary({
        selectionLimit: slotsWithoutImage.length,
        mediaType: 'photo',
        maxHeight: 800,
        maxWidth: 300,
      });

      if (responsne.assets && responsne.assets?.length) {
        const newSlots = slotsWithoutImage.map((item, index) =>
          index < responsne.assets!.length
            ? { ...item, disabledDrag: false, disabledReSorted: false, data: responsne.assets![index] }
            : item
        );

        setData([...slotsWithImage, ...newSlots]);
      }
    } catch (err) {
      console.log('err');
      console.log(err);
    }
  };

  const onDeletePhoto = (index: number) => {
    const newData = [...data];
    const element = newData[index];
    newData.splice(index, 1);
    newData.splice(maxImages - 1, 0, { ...element, disabledDrag: true, disabledReSorted: true, data: undefined });

    setData(newData);
  };

  const handleOnNextPress = async () => {
    if (!updateUserState) {
      return;
    }

    let images: ProfileImageInfo[] = [];
    await asyncForEach(slotsWithImage, async (slotWithImage, order) => {
      try {
        const file = await RNFS.readFile(slotWithImage.data!.uri!, 'base64');
        images = [...images, { file, order }];
      } catch (err) {
        console.log('error when reading image files');
        console.log(JSON.stringify(err));
      }
    });

    updateUserState({
      images: images.map((image) => ({
        name: 'photo' + image.order,
        type: 'image/png',
        data: image.file,
      })),
    });

    navigation.navigate(RegistrationRoutes.uploading);
  };

  return (
    <PhotosUploadView
      data={data}
      handleChoosePhotos={handleChoosePhotos}
      onDeletePhoto={onDeletePhoto}
      setData={setData}
      handleOnNextPress={handleOnNextPress}
      slotsWithImage={slotsWithImage}
    />
  );
};

export default PhotosUpload;
