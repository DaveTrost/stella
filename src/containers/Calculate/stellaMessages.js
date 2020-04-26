import { CALCULATE1, CALCULATE2, UNKNOWN } from '../../store/userProgress/reducer';

const messageLookup = {
  [UNKNOWN]: [],
  [CALCULATE1]: [
    `Almost done! I just need your most recent 
    monthly electric bill to calculate your savings`,
  ],
  [CALCULATE2]: [
    `Hang on. I am calculating your savings...`,
    `Sizing your solar system...`,
    `Checking on energy prices...`,
  ],
};

export const getStellaMessages = step => messageLookup[step];
