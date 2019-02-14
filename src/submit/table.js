import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (values.name == 'error') {
      throw new SubmissionError({
        name: 'Test Error',
        _error: 'This is a test'
      });
    }
  });
}

export default submit;
