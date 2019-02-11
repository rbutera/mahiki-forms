import React from 'react';
import { Field, reduxForm } from 'redux-form';

let bookingForm = props => {
  const { handleSubmit, purpose = 'generic' } = props;
  return (
    <div className="booking-form">
      <h1>Booking Form ({purpose})</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="book-{purpose}-name">Name</label>
          <Field
            name="name"
            component="input"
            type="text"
            className="form-control"
            id="book-{purpose}-name"
            placeholder="Name"
          />
          <p className="help-block">HELP</p>
        </div>
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
          <p className="help-block">HELP</p>
        </div>
        <div className="form-group">
          <label for="book-{purpose}-phone">Phone No.</label>
          <Field
            name="phone"
            component="input"
            type="tel"
            className="form-control"
            id="book-{purpose}-phone"
            placeholder="Phone No."
          />
          <p className="help-block">HELP</p>
        </div>
        <div className="form-group">
          <label for="book-{purpose}-date">Date</label>
          <Field
            name="date"
            component="input"
            type="date"
            className="form-control"
            id="book-{purpose}-date"
            placeholder="Date of Visit"
          />
          <p className="help-block">HELP</p>
        </div>
        <div className="form-group">
          <label for="book-{purpose}-type">Type of Event</label>
          <Field
            name="date"
            component="select"
            className="form-control"
            id="book-{purpose}-type"
            placeholder="Type of Event"
          >
            <option value="Birthday">Birthday</option>
            <option value="Private">Private</option>
            <option value="Corporate">Corporate</option>
            <option value="Christmas">Christmas</option>
          </Field>
          <p className="help-block">HELP</p>
        </div>

        <div className="form-group">
          <label for="book-{purpose}-eoln">Evening or Late Night</label>
          <Field
            name="eoln"
            component="select"
            className="form-control"
            id="book-{purpose}-eoln"
            placeholder="Evening or Late Night"
          >
            <option value="Evening">Evening (18:00 - 22:00)</option>
            <option value="Late">Late Night (22:00 - 03:00)</option>
          </Field>
          <p className="help-block">HELP</p>
        </div>

        <div className="form-group">
          <label for="book-{purpose}-time">Arrival Time</label>
          <Field
            name="time"
            component="input"
            type="time"
            className="form-control"
            id="book-{purpose}-time"
            placeholder="Arrival Time"
          />
          <p className="help-block">HELP</p>
        </div>

        <div className="form-group">
          <label for="book-{purpose}-numpeople">Number of People</label>
          <Field
            name="numpeople"
            component="input"
            type="number"
            className="form-control"
            id="book-{purpose}-numpeople"
            placeholder="No. of People"
          />
          <p className="help-block">HELP</p>
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
          <label for="book-{purpose}-additional">Additional Requests</label>
          <Field
            name="name"
            component="textarea"
            className="form-control"
            id="book-{purpose}-additional"
            placeholder="Additional Requests and Comments to add to your booking enquiry"
          />
          <p className="help-block">HELP</p>
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
