import React from 'react';
import { Field, reduxForm } from 'redux-form';

let bookingForm = props => {
  const { handleSubmit, purpose = 'generic' } = props;
  return (
    <div className="booking-form">
      <h1>Booking Form ({purpose})</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="book-{purpose}-email">Email address</label>
          <Field
            name="email"
            component="input"
            type="email"
            className="form-control"
            id="book-{purpose}-email"
            placeholder="Email"
          />
          <p className="help-block">help text here</p>
        </div>
        <div className="form-group">
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
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </div>
  );
};

export const BookingForm = reduxForm({
  form: 'book-event'
})(bookingForm);

export default BookingForm;
