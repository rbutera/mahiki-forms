import { validateForm } from './eventform';

describe('eventform', () => {
  describe('validateForm', () => {
    let validValues;
    beforeEach(() => {
      validValues = {
        name: 'Rai Butera',
        email: 'rai@rbutera.com',
        phone: '07780688428',
        date: 'rai@rbutera.com  ',
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
      throw new Error('not yet implemented');
    });

    it('updates error.email if email is missing/invalid', () => {
      throw new Error('not yet implemented');
    });

    it('updates error.phone if phone is invalid/missing', () => {
      throw new Error('not yet implemented');
    });

    it('updates error.date if date is invalid/missing', () => {
      throw new Error('not yet implemented');
    });

    it('updates error.eoln if eoln is invalid/missing', () => {
      throw new Error('not yet implemented');
    });

    it('updates error.numpeople if numpeople is invalid/missing', () => {
      throw new Error('not yet implemented');
    });
  });
});
