import { StackRouter } from '@react-navigation/native';
import {ToastAndroid} from 'react-native';
const MyStackRouter = options => {
  const router = StackRouter(options);

  return {
    ...router,
    getStateForAction(state, action, options) {
      const result = router.getStateForAction(state, action, options);
      // console.log("MyStackRouter",state,action,options,result);
      if (
        result != null &&
        result.index > state.index &&
        state.routes[state.index].params?.isEditing
      ) {
        // Returning the current state means that the action has been handled, but we don't have a new state

        ToastAndroid.show("is editing, cant leave", ToastAndroid.SHORT);

        return state;
      }

      return result;
    },
  };
};

export default MyStackRouter