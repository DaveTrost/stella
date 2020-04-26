import { CALCULATE1, CALCULATE2 } from '../../store/userProgress/reducer';

export const getStellaMessages = step => {
  switch(step) {
    case CALCULATE1:
      return [
        `Almost done! I just need your most recent 
        monthly electric bill to calculate your savings`,
      ];
    case CALCULATE2: 
      return [
        `Hang on. I am calculating your savings...`,
        `Sizing your solar system...`,
        `Checking on energy prices...`,
      ];
    default:
      return [];
  }    
}
