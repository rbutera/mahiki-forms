import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import addons from '@storybook/addons';
import withRedux from 'addon-redux/withRedux';
import store from '../src/configureStore';
import { BookingForm } from '../src/bookingform';
import { submitEventEnquiry } from '../src/event';

const withReduxSettings = {
  Provider,
  store,
  state: { optional: 'state to merge on start' },
  actions: [{ name: 'Demo Action', action: { type: 'test' } }]
};

const withReduxDecorator = withRedux(addons)(withReduxSettings);

const stories = storiesOf('Booking Form', module);
stories.addDecorator(withReduxDecorator);

function BookingFormDemo() {
  return <BookingForm purpose="Event" onSubmit={submitEventEnquiry} />;
}
stories.add('default', () => <BookingFormDemo />);
