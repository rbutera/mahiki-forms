import { render } from 'react-dom';
import $ from 'jquery';
import React from 'react';
import { EventFormContainer } from './eventform';
import { TableFormContainer } from './tableform';
import store from './configureStore';
import ProviderWrapper from './Provider';

function EventPage() {
  return (
    <div className="event-enquiry-page">
      <ProviderWrapper store={store}>
        <EventFormContainer />
      </ProviderWrapper>
    </div>
  );
}
function TablePage() {
  return (
    <div className="book-a-table-page">
      <ProviderWrapper store={store}>
        <EventFormContainer />
      </ProviderWrapper>
    </div>
  );
}
const event = document.getElementById('mahiki-form-event-root');
if (event) {
  console.debug('rendering EventPage');
  render(<EventPage />, event);
} else {
  console.debug('could not find mahiki-form-event-root element');
}

const table = document.getElementById('mahiki-form-table-root');
if (table) {
  console.debug('rendering TablePage');
  render(<TablePage />, table);
} else {
  console.debug('could not find mahiki-form-table-root element');
}

console.info('mahiki-forms loaded');
