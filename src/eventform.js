import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { split } from 'rambda';
import { format } from 'date-fns';
import PulseLoader from 'react-spinners/PulseLoader';
import { MdCheck } from 'react-icons/md';
import submit from './submit/event';
import {
  validateTime,
  validateName,
  validateEmail,
  validatePhoneNumber,
  validateDate
} from './validation';
import { SuccessModal, FailureModal } from './popup';
const DATE_FORMAT = 'YYYY-MM-DD';

export const warnForm = values => {
  const warnings = {};
  const today = format(new Date(), DATE_FORMAT);
  if (values.date && values.date === today) {
    warnings.date =
      'For same day reservations and parties over 10 please call us on 020 7493 9529';
  }
  return warnings;
};
// https://redux-form.com/6.6.3/examples/syncvalidation/
export const validateForm = values => {
  const errors = {};
  const { name, email, phone, date, toe, eoln, time, numpeople } = values;

  if (!name) {
    errors.name = 'Please enter your name';
  } else if (!validateName(name)) {
    errors.name = 'Please enter alphabetical characters only';
  }

  if (!email) {
    errors.email = 'Please enter your email address';
  }

  if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!phone || !validatePhoneNumber(phone)) {
    errors.phone =
      'Please provide a UK Phone Number or Mobile Telephone Number.';
  }
  if (!date || !validateDate(date)) {
    errors.date = 'Please choose a valid date for your event';
  }

  if (!time) {
    errors.time = 'Please enter your intended arrival time';
  }

  if (!eoln || !(eoln === 'Late' || eoln === 'Evening')) {
    errors.eoln = 'Please select Evening or Late Night';
  }

  if (time) {
    const [hh, mm] = split(':')(time);
    const hour = parseInt(hh, 10);
    const minutes = parseInt(mm, 10);

    if (!validateTime(time)) {
      errors.time = "Mahiki's opening hours are 18:00 - 03:00";
    } else {
      // console.error('hour:', hour);
      if (eoln === 'Evening' && !(hour >= 18 && hour < 22)) {
        errors.time =
          'Invalid Arrival Time. You have selected an Evening Event (above). Please enter a time between 18:00 and 22:00';
      }

      if (eoln === 'Late' && !((hour >= 0 && hour < 3) || hour >= 22)) {
        errors.time =
          'Invalid Arrival Time. You have selected a Late Night Event (above). Please enter a time between 22:00 and 03:00';
      }
    }
  }

  if (!numpeople) {
    errors.numpeople =
      'Please enter the number of people that will be attending your event.';
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div
    className={
      'form-group ' +
      (touched && error ? 'has-error' : '') +
      (touched && warning ? 'has-warning' : '')
    }
  >
    <label className="control-label">{label}</label>
    <input
      className="form-control"
      {...input}
      placeholder={label}
      type={type}
    />
    {touched &&
      ((error && <p className="help-block">{error}</p>) ||
        (warning && <p className="help-block">{warning}</p>))}
  </div>
);

let eventForm = props => {
  const {
    handleSubmit,
    pristine,
    done,
    reset,
    invalid,
    valid,
    submitting
  } = props;
  const renderSubmitText = () => {
    if (submitting) {
      return (
        <PulseLoader
          sizeUnit="em"
          size={1}
          color="#FFFFFF"
          loading={submitting}
        />
      );
    }
    if (done) {
      return (
        <div>
          Request Sent <MdCheck />
        </div>
      );
    }
    if (pristine || valid) {
      return 'Send Request';
    }
    return 'Cannot Send Request - Check Errors';
  };
  return (
    <div className="booking-form">
      <h3>Enquire Today</h3>
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={renderField}
          type="text"
          className="form-control"
          id="book-event-name"
          label="Name"
        />

        <Field
          name="email"
          component={renderField}
          type="email"
          className="form-control"
          id="book-event-email"
          label="Email"
        />

        <Field
          name="phone"
          component={renderField}
          type="tel"
          className="form-control"
          id="book-event-phone"
          label="Phone No."
        />

        <Field
          name="date"
          component={renderField}
          type="date"
          className="form-control"
          id="book-event-date"
          label="Date of Visit (dd/mm/yyyy)"
        />

        <div className="form-group">
          <label for="book-event-toe">Type of Event</label>
          <Field
            name="toe"
            component="select"
            className="form-control"
            id="book-event-toe"
            placeholder="Type of Event"
          >
            <option value="Birthday">Birthday</option>
            <option value="Private">Private</option>
            <option value="Corporate">Corporate</option>
            <option value="Christmas">Christmas</option>
          </Field>
        </div>

        <div className="form-group">
          <label for="book-event-eoln">Evening or Late Night</label>
          <Field
            name="eoln"
            component="select"
            className="form-control"
            id="book-event-eoln"
            placeholder="Evening or Late Night"
          >
            <option value="Evening">Evening (18:00 - 22:00)</option>
            <option value="Late">Late Night (22:00 - 03:00)</option>
          </Field>
        </div>

        <Field
          name="time"
          component={renderField}
          type="time"
          className="form-control"
          id="book-event-time"
          label="Arrival Time"
        />

        <Field
          name="numpeople"
          component={renderField}
          type="number"
          className="form-control"
          id="book-event-numpeople"
          label="No. of People"
        />

        <div className="form-group">
          <label>Also Required:</label>
          <div className="checkbox">
            <label for="dj">
              <Field name="dj" id="dj" component="input" type="checkbox" />
              DJ
            </label>
          </div>

          <div className="checkbox">
            <label for="food">
              <Field name="food" id="food" component="input" type="checkbox" />
              Food
            </label>
          </div>

          <div className="checkbox">
            <label for="cocktails">
              <Field
                name="cocktails"
                id="cocktails"
                component="input"
                type="checkbox"
              />
              Cocktails
            </label>
          </div>
        </div>
        <div className="form-group">
          <label for="book-event-additional">Additional Requests</label>
          <Field
            name="additional"
            component="textarea"
            className="form-control"
            id="book-event-additional"
            placeholder="Additional requests and comments to add to your booking enquiry (optional)"
          />
        </div>

        <button
          className={`btn btn-lg btn-block
          ${pristine ? ' btn-default' : ''} 
          ${done ? ' btn-success' : ''}
          ${valid && !pristine ? ' btn-primary' : ''}
          ${invalid && !pristine ? ' btn-danger' : ''}
          ${submitting ? ' btn-warning' : ''}`}
          type="submit"
          disabled={submitting || done}
        >
          {renderSubmitText()}
        </button>
      </form>
    </div>
  );
};

export const EventForm = reduxForm({
  form: 'book-event',
  warn: warnForm,
  validate: validateForm
})(eventForm);

export class EventFormContainer extends Component {
  constructor(props) {
    super(props);
    const { success = false, failure = false } = props;
    this.state = {
      sent: success,
      failed: failure,
      done: false
    };
  }

  showSuccess = () => {
    this.setState({ sent: true, done: true, failed: false });
  };

  hideSuccess = () => {
    this.setState({ done: true, sent: false, failed: false });
  };

  showFailure = errors => {
    this.setState({ done: false, sent: false, failed: true, errors });
  };

  hideFailure = () => {
    this.setState({ done: false, sent: false, failed: false });
  };

  render() {
    const { sent, failed, done, errors } = this.state;
    const { hideSuccess, hideFailure } = this;
    return (
      <div>
        {sent && <SuccessModal show={sent} onHide={hideSuccess} />}
        {failed && (
          <FailureModal show={failed} onHide={hideFailure} errors={errors} />
        )}

        <div className="container">
          <EventForm
            onSubmit={submit}
            onSubmitSuccess={this.showSuccess}
            onSubmitFail={this.showFailure}
            done={done}
          />
        </div>
      </div>
    );
  }
}

export default EventFormContainer;
