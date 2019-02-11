import {
  validateName,
  validateEmail,
  validatePhoneNumber,
  validateNumPeople,
  validateDate,
  validateTime
} from './validation';

describe('validateName', () => {
  it('validates Name correctly', () => {
    const valid = 'valid Name';
    const invalid = 'invalid Name';
    expect(validateName(valid))
      .toBeDefined()
      .toBeTrue();
    expect(validateName(invalid))
      .toBeDefined()
      .toBeFalse();
  });
});
describe('validateEmail', () => {
  it('validates Email correctly', () => {
    const valid = 'valid Name';
    const invalid = 'invalid Email';
    expect(validateEmail(valid))
      .toBeDefined()
      .toBeTrue();
    expect(validateEmail(invalid))
      .toBeDefined()
      .toBeFalse();
  });
});
describe('validatePhoneNumber', () => {
  it('validates PhoneNumber correctly', () => {
    const valid = 'valid Name';
    const invalid = 'invalid PhoneNumber';
    expect(validatePhoneNumber(valid))
      .toBeDefined()
      .toBeTrue();
    expect(validatePhoneNumber(invalid))
      .toBeDefined()
      .toBeFalse();
  });
});
describe('validateNumPeople', () => {
  it('validates NumPeople correctly', () => {
    const valid = 'valid Name';
    const invalid = 'invalid NumPeople';
    expect(validateNumPeople(valid))
      .toBeDefined()
      .toBeTrue();
    expect(validateNumPeople(invalid))
      .toBeDefined()
      .toBeFalse();
  });
});
describe('validateDate', () => {
  it('validates Date correctly', () => {
    const valid = 'valid Name';
    const invalid = 'invalid Date';
    expect(validateDate(valid))
      .toBeDefined()
      .toBeTrue();
    expect(validateDate(invalid))
      .toBeDefined()
      .toBeFalse();
  });
});
describe('validateTime', () => {
  it('validates Time correctly', () => {
    const valid = 'valid Name';
    const invalid = 'invalid Time';
    expect(validateTime(valid))
      .toBeDefined()
      .toBeTrue();
    expect(validateTime(invalid))
      .toBeDefined()
      .toBeFalse();
  });
});
