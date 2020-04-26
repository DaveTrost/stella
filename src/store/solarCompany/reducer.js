import Immutable from 'seamless-immutable';

const initialState = Immutable({
  loading: true,
  styleSkin: {
    avatar: '',
  },
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// selectors

export const getSolarCoLoading = state => state.solarCompany.loading;
export const getStyleSkin = state => state.solarCompany.styleSkin;
