import { DayPassToken } from '../config';

export const getTokenName = (tokenId: DayPassToken) => {
  switch (tokenId) {
    case DayPassToken.DayPass:
      return 'Day Pass';
    case DayPassToken.WeeklyPass:
      return 'Weekly Pass';
    case DayPassToken.YearlyPass:
      return 'Yearly Pass';
    case DayPassToken.SpecialEventPass:
      return 'Special Event Pass';
    default:
      return ''
  }
};

export const getTokenFullName = (name: string) => {
  if (name === 'dayPass') {
    return 'Day Pass Token';
  } else if (name === 'weeklyPass') {
    return 'Weekly Pass Token';
  } else if (name === 'yearlyPass') {
    return 'Yearly Pass Token';
  } else if (name === 'specialPass') {
    return 'Special Pass Token';
  }
  return '';
};

export const getTokenId = (name: string) => {
  if (name === 'dayPass') {
    return DayPassToken.DayPass;
  } else if (name === 'weeklyPass') {
    return DayPassToken.WeeklyPass;
  } else if (name === 'yearlyPass') {
    return DayPassToken.YearlyPass;
  } else if (name === 'specialPass') {
    return DayPassToken.SpecialEventPass;
  }
  return DayPassToken.DayPass;
};
