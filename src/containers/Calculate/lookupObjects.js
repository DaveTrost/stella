import {
  LOADING,
  NEW_USER,
  CALCULATE1,
  CALCULATE2,
  CALCULATE3,
  CALCULATE4,
  RESULT1,
} from '../../store/userProgress/actions';

const msg1 = `Almost done! I just need your most recent monthly electric bill to calculate your savings`;
const msg2 = `Hang on. I am calculating your savings...`;
const msg3 = `Sizing your solar system...`;
const msg4 = `Checking on energy prices...`;
export const stepLookup = {
  [LOADING]: { uiStep: LOADING, stellaMessages: [] },
  [NEW_USER]: { uiStep: CALCULATE1, stellaMessages: [] },
  [CALCULATE1]: { uiStep: CALCULATE1, stellaMessages: [msg1] },
  [CALCULATE2]: { uiStep: CALCULATE2, stellaMessages: [msg2] },
  [CALCULATE3]: { uiStep: CALCULATE2, stellaMessages: [msg2, msg3] },
  [CALCULATE4]: { uiStep: CALCULATE2, stellaMessages: [msg2, msg3, msg4] },
  [RESULT1]: { uiStep: RESULT1, stellaMessages: ['results page coming next'] },
};

export const uiStepLookup = {
  [LOADING]: { 
    progress: 0, 
    showStartOver: false, 
    showProgressBar: false, showRangeSlider: false, 
    showActionBar: false, invisibleActionBar: false 
  },
  [CALCULATE1]: { 
    progress: 66, 
    showStartOver: true, 
    showProgressBar: true, showRangeSlider: true, 
    showActionBar: true, invisibleActionBar: false 
  },
  [CALCULATE2]: { 
    progress: 100, 
    showStartOver: false, 
    showProgressBar: true, showRangeSlider: false, 
    showActionBar: false, invisibleActionBar: true 
  },
  [RESULT1]: { 
    progress: 100, 
    showStartOver: true, 
    showProgressBar: false, showRangeSlider: false, 
    showActionBar: false, invisibleActionBar: true 
  },
};

export const nextStepLookup = (userData) => {
  if(userData.step === CALCULATE1) return CALCULATE1;
  return userData.savings ? RESULT1 : CALCULATE3;
}