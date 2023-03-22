import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import routeConstants from '../routesConstants';

const Stack = createNativeStackNavigator();

const LoginStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routeConstants.login()} component={Login} />
  </Stack.Navigator>
);
export default LoginStack;
