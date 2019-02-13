import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submitBookTable from './submit/table';
let tableForm = props => {
  const { handleSubmit } = props;
  return (
    <div className="booking-form">
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="book-table-name">Name</label>
          <Field
            name="name"
            component="input"
            type="text"
            className="form-control"
            id="book-table-name"
            placeholder="Name"
          />
          <p className="help-block">Please enter your name.</p>
        </div>
        <div className="form-group">
          <label for="book-table-email">Email address</label>
          <Field
            name="email"
            component="input"
            type="email"
            className="form-control"
            id="book-table-email"
            placeholder="Email"
          />
          <p className="help-block">Please enter a valid email address</p>
        </div>
        <div className="form-group">
          <label for="book-table-phone">Phone No.</label>
          <Field
            name="phone"
            component="input"
            type="tel"
            className="form-control"
            id="book-table-phone"
            placeholder="Phone No."
          />
          <p className="help-block">
            Please provide a UK Phone Number or Mobile Telephone Number.
          </p>
        </div>
        <div className="form-group">
          <label for="book-table-date">Date of Event</label>
          <Field
            name="date"
            component="input"
            type="date"
            className="form-control"
            id="book-table-date"
            placeholder="Date of Visit"
          />
          <p className="help-block">
            Please choose a valid date for your event
          </p>
        </div>
        <div className="form-group">
          <label for="book-table-type">Type of Event</label>
          <Field
            name="date"
            component="select"
            className="form-control"
            id="book-table-type"
            placeholder="Type of Event"
          >
            <option value="Dinner">Dinner</option>
            <option value="Table">Late Night Table</option>
            <option value="Cocktails">Cocktails</option>
          </Field>
        </div>

        <div className="form-group">
          <label for="book-table-numpeople">Number of People</label>
          <Field
            name="numpeople"
            component="input"
            type="number"
            className="form-control"
            id="book-table-numpeople"
            placeholder="No. of People"
          />
          <p className="help-block">
            Please enter the number of people that will be attending your event.
          </p>
        </div>
        <div className="form-group">
          <label for="book-table-additional">Additional Requests</label>
          <Field
            name="name"
            component="textarea"
            className="form-control"
            id="book-table-additional"
            placeholder="Additional requests and comments to add to your booking enquiry (optional)"
          />
        </div>
        <button type="submit" className="btn btn-default">
          Send Request
        </button>
      </form>
    </div>
  );
};

export const TableForm = reduxForm({
  form: 'book-table'
})(tableForm);

export function TableFormContainer() {
  return <TableForm onSubmit={submitBookTable} />;
}
export default TableForm;
