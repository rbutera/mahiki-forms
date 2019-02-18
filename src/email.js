import _ from 'lodash';
import { format } from 'date-fns';
import { split, mapObjIndexed } from 'rambda';
const emailjs = require('emailjs-com');
emailjs.init('user_7XLW7TColc8a79ci8D2Xu');

const PRETTY_DATE_FORMAT = 'dddd Do MMMM YYYY';
const SHORT_DATE_FORMAT = 'DD-MM-YYYY (ddd)';

function extractDate(date) {
  const [YYYY, MM, DD] = split('-')(date);
  return {
    YYYY,
    MM,
    DD
  };
}

export function sendTableEmail(values) {
  const { email, name, date, phone, tabletype, numpeople, additional } = values;
  const { YYYY, MM, DD } = extractDate(date);
  const converted = new Date(YYYY, MM - 1, DD);
  const params = {
    email,
    name,
    date: format(converted, SHORT_DATE_FORMAT),
    prettydate: format(converted, PRETTY_DATE_FORMAT),
    phone,
    tabletype,
    numpeople,
    additional: _.escape(additional)
  };
  return emailjs.send('default_service', 'book_table', params);
}

export function sendEventEmail(values) {
  const {
    email,
    name,
    date,
    phone,
    toe,
    eoln,
    time,
    dj,
    food,
    cocktails,
    numpeople,
    additional
  } = values;
  const { YYYY, MM, DD } = extractDate(date);
  const converted = new Date(YYYY, MM - 1, DD);
  const extras = {
    dj: dj ? 'YES' : 'NO',
    food: food ? 'YES' : 'NO',
    cocktails: cocktails ? 'YES' : 'NO'
  };

  const params = {
    ...extras,
    email,
    name,
    date: format(converted, SHORT_DATE_FORMAT),
    prettydate: format(converted, PRETTY_DATE_FORMAT),
    phone,
    toe,
    eoln,
    time,
    numpeople,
    additional: _.escape(additional)
  };
  return emailjs.send('default_service', 'event_enquiry', params);
}

export const email = {
  sendEventEmail,
  sendTableEmail
};
export default email;
