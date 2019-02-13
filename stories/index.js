import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import addons from '@storybook/addons';
import withRedux from 'addon-redux/withRedux';
import store from '../src/configureStore';
import { EventForm } from '../src/eventform';
import { TableForm } from '../src/tableform';
import submitEventEnquiry from '../src/submit/event';
import submitBookTable from '../src/submit/table';

const withReduxSettings = {
  Provider,
  store,
  // state: { optional: 'state to merge on start' },
  actions: [{ name: 'Demo Action', action: { type: 'test' } }]
};

const withReduxDecorator = withRedux(addons)(withReduxSettings);

const stories = storiesOf('Booking Forms', module);
stories.addDecorator(withReduxDecorator);

function EventFormContainer() {
  return <EventForm onSubmit={submitEventEnquiry} />;
}

function TableFormContainer() {
  return <TableForm onSubmit={submitBookTable} />;
}
stories.add('Events', () => <EventFormContainer />);
stories.add('Book a Table', () => <TableFormContainer />);
