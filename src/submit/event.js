import { SubmissionError } from 'redux-form';

import { sendEventEmail } from '../email';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
  return sendEventEmail(values).then(
    success => {
      console.log('event form submitted successfully. email sent.', success);
      return success;
    },
    error => {
      throw new SubmissionError({ status: error });
    }
  );
}

export default submit;
