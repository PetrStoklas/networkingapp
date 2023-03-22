import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation as useNativeNavigation } from '@react-navigation/native';

export const useNavigation = useNativeNavigation<NativeStackNavigationProp<any>>;
