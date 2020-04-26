import Immutable from 'seamless-immutable';

const initialState = Immutable({
  solarCoSkin: {
    avatar: 'https://stella-dev.demand-iq.com/media/avatars/65.jpg',
  },
  userData: {
    avgBill: '250',
  }
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// selectors

export const getSolarCoSkin = state => state.calculate.solarCoSkin;
export const getUserData = state => state.calculate.userData;
