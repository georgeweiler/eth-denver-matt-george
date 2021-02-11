import React from 'react';
import { createFlow, getSFUser } from './utils/SuperFluid';

export const SuperFluidContext = React.createContext();

export const SuperFluidProvider = (props) => {
  const [state, setState] = React.useState({
    user: {},
  });

  return (
    <SuperFluidContext.Provider
      value={{
        user: state.user,
        createFlow: async (amt) => {
          try {
            console.log('creating flow');
            createFlow(amt);
            console.log('done');
          } catch (error) {
            console.log('OIUO', error);
          }
        },
        getUser: async () => {
          const user = await getSFUser();
          setState({
            user,
          });
        },
      }}
    >
      {props.children}
    </SuperFluidContext.Provider>
  );
};
