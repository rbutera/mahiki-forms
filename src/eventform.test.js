import { format, addDays, subDays } from 'date-fns';
import { validateForm } from './eventform';

describe('eventform', () => {
  describe('validateForm', () => {
    let validValues;
    beforeEach(() => {
      const fmt = 'DD/MM/YYYY';
      const tomorrow = format(addDays(new Date(), 1), fmt);

      validValues = {
        name: 'Rai Butera',
        email: 'rai@rbutera.com',
        phone: '07780688428',
        date: tomorrow,
        toe: 'Corporate',
        eoln: 'Evening',
        time: '19:00',
        numpeople: 24,
        dj: true,
        food: false,
        cocktails: true,
        additional:
          "I'll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda."
      };
    });
    it('requires all fields except dj/food/cocktails and additional requests', () => {
      const errors = validateForm({});
      expect(errors)
        .toBeDefined()
        .toBeObject()
        .toContainKeys(['name', 'email', 'phone', 'date', 'time', 'numpeople']);

      expect(errors).not.toContainKey('additional');
    });

    it('enforces an arrival time during Mahiki opening hours', () => {
      expect(validateForm({ eoln: 'Evening', time: '15:00' }))
        .toBeDefined()
        .toBeObject()
        .toContainKey('time');
      expect(validateForm({ eoln: 'Evening', time: '15:00' }).time).toEqual(
        "Mahiki's opening hours are 18:00 - 03:00"
      );
      expect(validateForm({ eoln: 'Evening', time: '15:69' }).time).toEqual(
        "Mahiki's opening hours are 18:00 - 03:00"
      );
      expect(validateForm({ eoln: 'Late', time: '22:00' }))
        .toBeDefined()
        .not.toContainKey('time');
      expect(validateForm({ eoln: 'Evening', time: '18:45' }))
        .toBeDefined()
        .not.toContainKey('time');
    });

    it('enforces an arrival time between 18:00 and 22:00 for Evening events', () => {
      expect(validateForm({ eoln: 'Evening', time: '22:15' }).time).toEqual(
        'Invalid Arrival Time. You have selected an Evening Event (above). Please enter a time between 18:00 and 22:00'
      );
      expect(validateForm({ eoln: 'Evening', time: '00:00' }).time).toEqual(
        'Invalid Arrival Time. You have selected an Evening Event (above). Please enter a time between 18:00 and 22:00'
      );
    });

    it('enforces an arrival time between 22:00 and 03:00 for Late Night events', () => {
      expect(validateForm({ eoln: 'Late', time: '19:00' }).time).toEqual(
        'Invalid Arrival Time. You have selected a Late Night Event (above). Please enter a time between 22:00 and 03:00'
      );
    });

    it('updates error.name if name is missing/invalid', () => {
      expect(validateForm({ name: 1337 }))
        .toBeDefined()
        .toContainKey('name');
      expect(validateForm({ name: '1337' }))
        .toBeDefined()
        .toContainKey('name');
      expect(validateForm({ name: '' }))
        .toBeDefined()
        .toContainKey('name');
      expect(validateForm({ name: undefined }))
        .toBeDefined()
        .toContainKey('name');
      expect(validateForm({ name: 'Charles1' }))
        .toBeDefined()
        .toContainKey('name');
      expect(validateForm({ name: 'Charles_' }))
        .toBeDefined()
        .toContainKey('name');
      expect(validateForm(validValues))
        .toBeDefined()
        .not.toContainKey('name');
    });

    it('updates error.email if email is missing/invalid', () => {
      expect(validateForm({ email: 1337 }))
        .toBeDefined()
        .toContainKey('email');
      expect(validateForm({ name: '1337' }))
        .toBeDefined()
        .toContainKey('email');
      expect(validateForm({ email: '' }))
        .toBeDefined()
        .toContainKey('email');
      expect(validateForm({ email: undefined }))
        .toBeDefined()
        .toContainKey('email');
      expect(validateForm({ email: 'Charles1' }))
        .toBeDefined()
        .toContainKey('email');
      expect(validateForm({ email: 'Charles_' }))
        .toBeDefined()
        .toContainKey('email');

      expect(validateForm({ email: 'Charles_@@google.com' }))
        .toBeDefined()
        .toContainKey('email');

      expect(validateForm(validValues))
        .toBeDefined()
        .not.toContainKey('email');
    });

    it('updates error.phone if phone is invalid/missing', () => {
      expect(validateForm({ phone: 1337 }))
        .toBeDefined()
        .toContainKey('phone');
      expect(validateForm({ phone: '1337' }))
        .toBeDefined()
        .toContainKey('phone');
      expect(validateForm({ phone: '' }))
        .toBeDefined()
        .toContainKey('phone');
      expect(validateForm({ phone: undefined }))
        .toBeDefined()
        .toContainKey('phone');
      expect(validateForm({ phone: 'Charles1' }))
        .toBeDefined()
        .toContainKey('phone');
      expect(validateForm({ phone: 'Charles_' }))
        .toBeDefined()
        .toContainKey('phone');

      expect(validateForm({ phone: '020 7493 9529' }))
        .toBeDefined()
        .not.toContainKey('phone');

      expect(validateForm(validValues))
        .toBeDefined()
        .not.toContainKey('phone');
    });

    it('updates error.date if date is invalid (e.g. in the past) or missing', () => {
      const fmt = 'DD/MM/YYYY';
      const today = format(new Date(), fmt);
      console.log(`today: ${today}`);
      const yesterday = format(subDays(new Date(), 1), fmt);

      const missingDate = { ...validValues, date: undefined };
      const past = { ...validValues, date: yesterday };
      expect(validateForm(missingDate))
        .toBeDefined()
        .toBeObject()
        .toContainKey('date');
      expect(validateForm(missingDate).date).toBeString();
      expect(validateForm(past))
        .toBeDefined()
        .toBeObject()
        .toContainKey('date');
      expect(validateForm(past).date).toBeString();
      expect(validateForm(validValues))
        .toBeDefined()
        .toBeObject()
        .not.toContainKey('date');
    });

    it('updates error.eoln if eoln is invalid/missing', () => {
      expect(validateForm({ eoln: undefined }))
        .toBeDefined()
        .toContainKey('eoln');
      expect(validateForm({ eoln: 'foo' }))
        .toBeDefined()
        .toContainKey('eoln');
      expect(validateForm({ eoln: 123 }))
        .toBeDefined()
        .toContainKey('eoln');
      expect(validateForm({ eoln: {} }))
        .toBeDefined()
        .toContainKey('eoln');
      expect(validateForm(validValues))
        .toBeDefined()
        .not.toContainKey('eoln');
    });

    it('updates error.numpeople if numpeople is invalid/missing', () => {
      expect(validateForm({ numpeople: undefined }))
        .toBeDefined()
        .toContainKey('numpeople');

      expect(validateForm({ numpeople: 0 }))
        .toBeDefined()
        .toContainKey('numpeople');

      expect(validateForm({ numpeople: 1 }))
        .toBeDefined()
        .not.toContainKey('numpeople');

      expect(validateForm({ numpeople: 3 }))
        .toBeDefined()
        .not.toContainKey('numpeople');

      expect(validateForm({ numpeople: 33 }))
        .toBeDefined()
        .not.toContainKey('numpeople');

      expect(validateForm({ numpeople: 1337 }))
        .toBeDefined()
        .not.toContainKey('numpeople');
    });
  });
});
