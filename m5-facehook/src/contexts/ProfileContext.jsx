import { createContext, useReducer } from 'react';
import { initialState, profileReducer } from '../reducers/ProfileReducer';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const profileInfo = {
    state,
    dispatch,
  };

  return (
    <ProfileContext.Provider value={profileInfo}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
