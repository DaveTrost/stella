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

export function getSolarCoSkin(state) {
  return state.calculate.solarCoSkin;
}

export function getUserData(state) {
  console.log(state);
  
  return state.calculate.userData;
}