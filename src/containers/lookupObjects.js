import {
  LOADING,
  NEW_USER,
  CALCULATE1,
  CALCULATE2,
  CALCULATE3,
  CALCULATE4,
  RESULT1,
  END,
} from '../store/userProgress/actions';

const msg1 = `Almost done! I just need your most recent monthly electric bill to calculate your savings`;
const msg2 = `Hang on. I am calculating your savings...`;
const msg3 = `Sizing your solar system...`;
const msg4 = `Checking on energy prices...`;
const msg5 = `Check out these savings!+__InfoScroller__`;
const msg6 = `Let me know when you're ready to see pricing!`;

export const stepLookup = {
  [LOADING]: { uiStep: LOADING, stellaMessages: [] },
  [NEW_USER]: { uiStep: CALCULATE1, stellaMessages: [] },
  [CALCULATE1]: { uiStep: CALCULATE1, stellaMessages: [msg1] },
  [CALCULATE2]: { uiStep: CALCULATE2, stellaMessages: [msg2] },
  [CALCULATE3]: { uiStep: CALCULATE2, stellaMessages: [msg2, msg3] },
  [CALCULATE4]: { uiStep: CALCULATE2, stellaMessages: [msg2, msg3, msg4] },
  [RESULT1]: { uiStep: RESULT1, stellaMessages: [msg5, msg6] },
  [END]: { uiStep: END, stellaMessages: [] },
};

export const uiStepLookup = {
  [LOADING]: { 
    progress: 0, 
    showStartOver: false, 
    showProgressBar: false, 
    showRangeSlider: false, 
    showActionBar: false, 
  },
  [CALCULATE1]: { 
    progress: 66, 
    showStartOver: true, 
    showProgressBar: true, 
    showRangeSlider: true, 
    showActionBar: true, 
  },
  [CALCULATE2]: { 
    progress: 100, 
    showStartOver: false, 
    showProgressBar: true, 
    showRangeSlider: false, 
    showActionBar: false,
  },
  [RESULT1]: { 
    progress: 100, 
    showStartOver: true, 
    showProgressBar: false, 
    showRangeSlider: false, 
    showActionBar: true,
  },
  [END]: { 
    progress: 0, 
    showStartOver: false, 
    showProgressBar: false, 
    showRangeSlider: false, 
    showActionBar: false, 
  },
};

export const finePrint = `To help you go solar, we need your approval to contact you. 
  By clicking above, you agree that [Company] may call & text you about 
  [Company] products at the phone number you entered above, 
  using pre-recorded messages or an autodialer, even if your number is on a "Do Not Call" list. 
  Msg & data rates may apply to text messages. Consent for calls & texts is optional. 
  You can opt-out anytime.`;
