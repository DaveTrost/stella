import Immutable from 'seamless-immutable';

const initialState = Immutable({
  styleSkin: {
    avatar: 'https://stella-dev.demand-iq.com/media/avatars/65.jpg',
  },
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// selectors

export const getStyleSkin = state => state.solarCompany.styleSkin;
