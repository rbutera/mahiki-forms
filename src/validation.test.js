import {
  validateName,
  validateEmail,
  validatePhoneNumber,
  validateNumPeople,
  validateDate,
  validateTime
} from './validation';

import { format, subDays, addDays } from 'date-fns';

describe('validateName', () => {
  it('validates Name correctly', () => {
    const valid = 'valid Name';
    const invalid = '';
    expect(validateName(valid)).toEqual(true);
    expect(validateName(invalid)).toEqual(false);
  });
});
describe('validateEmail', () => {
  it('validates Email correctly', () => {
    const valid = 'rai@rbutera.com';
    const invalid = 'sofinasfoaisf.com@';
    expect(validateEmail(valid)).toEqual(true);
    expect(validateEmail(invalid)).toEqual(false);
  });
});

describe('validatePhoneNumber', () => {
  it('validates PhoneNumber correctly', () => {
    expect(validatePhoneNumber('07789654123')).toEqual(true);
    expect(validatePhoneNumber('+447789654123')).toEqual(true);
    expect(validatePhoneNumber('+442081111111')).toEqual(true);
    expect(validatePhoneNumber('02081111111')).toEqual(true);
    expect(validatePhoneNumber('0208 111 1111')).toEqual(true);
    expect(validatePhoneNumber('120492109441')).toEqual(false);
    expect(validatePhoneNumber('0778965a4123')).toEqual(false);
  });
});

describe('validateNumPeople', () => {
  it('validates NumPeople correctly', () => {
    expect(validateNumPeople(10)).toEqual(true);
    expect(validateNumPeople(0)).toEqual(false);
    expect(validateNumPeople(99)).toEqual(true);
  });
});
describe('validateDate', () => {
  it('validates Date correctly', () => {
    const fmt = 'YYYY-MM-DD';
    const today = format(new Date(), fmt);
    const yesterday = format(subDays(new Date(), 1), fmt);
    const tomorrow = format(addDays(new Date(), 1), fmt);
    expect(validateDate(yesterday)).toEqual(false);
    console.error('validateDate today test');
    expect(validateDate(today)).toEqual(true);
    expect(validateDate(tomorrow)).toEqual(true);
  });
});
describe('validateTime', () => {
  it('validates Time correctly', () => {
    expect(validateTime('03:00')).toEqual(true);
    expect(validateTime('02:45')).toEqual(true);
    expect(validateTime('19:00')).toEqual(true);
    expect(validateTime('18:00')).toEqual(true);
    expect(validateTime('22:00')).toEqual(true);
    expect(validateTime('18:14')).toEqual(true);
    expect(validateTime('18:59')).toEqual(true);
    expect(validateTime('03:01')).toEqual(false);
    expect(validateTime('04:00')).toEqual(false);
    expect(validateTime('18:60')).toEqual(false);
  });
});
