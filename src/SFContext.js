import React from 'react';
import { createFlow, getSFUser } from './utils/SuperFluid';
import { contentCreators } from './static/data/contentCreators';

export const SuperFluidContext = React.createContext();

export const SuperFluidProvider = (props) => {
  const [state, setState] = React.useState({
    user: {},
    subscriptions: [],
  });

  return (
    <SuperFluidContext.Provider
      value={{
        ...state,
        createFlow: async (amt, address) => {
          createFlow(amt, address);
        },
        getUser: async () => {
          const user = await getSFUser();
          const subscriptions =
            contentCreators.filter((author) =>
              user?.cfa?.flows?.outFlows
                .map((flow) => flow.receiver)
                .includes(author.address),
            ) || [];

          setState({
            subscriptions,
            user,
          });
        },
      }}
    >
      {props.children}
    </SuperFluidContext.Provider>
  );
};
