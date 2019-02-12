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

    it('enforces an arrival time between 18:00 and 22:00 for Evening events', () => {
      throw new Error('not yet implemented');
    });

    it('enforces an arrival time between 22:00 and 03:00 for Evening events', () => {
      throw new Error('not yet implemented');
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
