import React, { FC } from 'react';
import { Button, IconButton, Surface, Text } from 'react-native-paper';
import { Image } from 'react-native';
import { DraggableGrid } from 'react-native-draggable-grid';
import { ImageGridDataItem } from '../types';
import styles from '../styles';
import theme from '../../../theme';

interface PhotosUploadViewProps {
  data: ImageGridDataItem[];
  onDeletePhoto: (index: number) => void;
  setData: React.Dispatch<React.SetStateAction<ImageGridDataItem[]>>;
  handleChoosePhotos: () => Promise<void>;
  slotsWithImage: ImageGridDataItem[];
  handleOnNextPress: () => Promise<void>;
}

const PhotosUploadView: FC<PhotosUploadViewProps> = ({
  data,
  onDeletePhoto,
  setData,
  handleChoosePhotos,
  handleOnNextPress,
  slotsWithImage,
}) => (
  <Surface style={styles.horizontalStack}>
    <Text variant="headlineLarge" style={styles.title}>
      Upload photos
    </Text>
    <Text variant="bodyLarge" style={styles.subtitle}>
      Pick your best photos and upload them. Try to choose photos where you are clearly visible so others can get idea
      who you are.
    </Text>

    <Surface style={styles.photoUploadContainer}>
      <DraggableGrid
        data={data}
        numColumns={3}
        renderItem={(item: ImageGridDataItem, order) => (
          <Surface elevation={2} key={item.key} style={styles.photoCard}>
            {item.data?.uri ? (
              <>
                <Image style={styles.photoImage} source={{ uri: item.data.uri }} />
                <IconButton
                  iconColor={theme.colors.inversePrimary}
                  icon="close-thick"
                  size={20}
                  onPress={() => onDeletePhoto(order)}
                  style={styles.removePhotoBtn}
                />
              </>
            ) : (
              <IconButton
                iconColor={theme.colors.inversePrimary}
                icon="plus-thick"
                size={20}
                onPress={handleChoosePhotos}
                style={styles.addPhotoBtn}
              />
            )}
          </Surface>
        )}
        onDragRelease={setData}
        itemHeight={200}
      />
    </Surface>

    <Button mode="outlined" style={styles.morePhotosBtn} onPress={handleChoosePhotos}>
      {slotsWithImage.length ? 'Choose more photos' : 'Choose photos'}
    </Button>
    <Button
      mode="contained"
      style={styles.submitPhotosBtn}
      disabled={!slotsWithImage.length}
      onPress={handleOnNextPress}
    >
      Next
    </Button>
  </Surface>
);

export default PhotosUploadView;
