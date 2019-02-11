import React from 'react';
import { Field, reduxForm } from 'redux-form';

let eventForm = props => {
  const { handleSubmit } = props;
  return (
    <div className="booking-form">
      <h1>Event Enquiry</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="book-event-name">Name</label>
          <Field
            name="name"
            component="input"
            type="text"
            className="form-control"
            id="book-event-name"
            placeholder="Name"
          />
          <p className="help-block">Please enter your name.</p>
        </div>
        <div className="form-group">
          <label for="book-event-email">Email address</label>
          <Field
            name="email"
            component="input"
            type="email"
            className="form-control"
            id="book-event-email"
            placeholder="Email"
          />
          <p className="help-block">Please enter a valid email address.</p>
        </div>
        <div className="form-group">
          <label for="book-event-phone">Phone No.</label>
          <Field
            name="phone"
            component="input"
            type="tel"
            className="form-control"
            id="book-event-phone"
            placeholder="Phone No."
          />
          <p className="help-block">
            Please provide a UK Phone Number or Mobile Telephone Number.
          </p>
        </div>
        <div className="form-group">
          <label for="book-event-date">Date of Event</label>
          <Field
            name="date"
            component="input"
            type="date"
            className="form-control"
            id="book-event-date"
            placeholder="Date of Visit"
          />
          <p className="help-block">
            Please choose a valid date for your event
          </p>
        </div>
        <div className="form-group">
          <label for="book-event-type">Type of Event</label>
          <Field
            name="date"
            component="select"
            className="form-control"
            id="book-event-type"
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
          <p className="help-block">
            Please select whether your event is an Evening or Late Night event
          </p>
        </div>

        <div className="form-group">
          <label for="book-event-time">Arrival Time</label>
          <Field
            name="time"
            component="input"
            type="time"
            className="form-control"
            id="book-event-time"
            placeholder="Arrival Time"
          />
          <p className="help-block">Please enter your intended arrival time</p>
          <p className="help-block">
            Invalid Arrival Time. You have selected{' '}
            <strong>an Evening Event</strong> (above). Please enter a time
            between 18:00 and 22:00
          </p>
          <p className="help-block">
            Invalid Arrival Time. You have selected{' '}
            <strong>a Late Night Event</strong> (above). Please enter a time
            between 22:00 and 02:00
          </p>
        </div>

        <div className="form-group">
          <label for="book-event-numpeople">Number of People</label>
          <Field
            name="numpeople"
            component="input"
            type="number"
            className="form-control"
            id="book-event-numpeople"
            placeholder="No. of People"
          />
          <p className="help-block">
            Please enter the number of people that will be attending your event.
          </p>
        </div>
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
            name="name"
            component="textarea"
            className="form-control"
            id="book-event-additional"
            placeholder="Additional requests and comments to add to your booking enquiry (optional)"
          />
        </div>
        <button type="submit" className="btn btn-default">
          Send Event Enquiry
        </button>
      </form>
    </div>
  );
};

export const EventForm = reduxForm({
  form: 'book-event'
})(eventForm);

export default EventForm;
