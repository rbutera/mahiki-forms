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
const event = document.getElementById('mahiki-event-form-root');
event ? render(EventPage, event) : false;
const table = document.getElementById('mahiki-table-form-root');
table ? render(TablePage, table) : false;
