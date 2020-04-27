import {
    CALCULATE1,
    CALCULATE2,
    NEW_USER,
    LOADING,
    CALCULATE3,
    CALCULATE4,
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
};
