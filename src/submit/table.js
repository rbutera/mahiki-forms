import { SubmissionError } from 'redux-form';

import { sendTableEmail } from '../email';

function submit(values) {
  return sendTableEmail(values).then(
    success => {
      console.log(
        'table form submitted successfully. email sent. (FIXED)',
        success
      );
      return success;
    },
    error => {
      throw new SubmissionError({ status: error });
    }
  );
}

export default submit;
