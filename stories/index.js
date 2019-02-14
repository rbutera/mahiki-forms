import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import addons from '@storybook/addons';
import withRedux from 'addon-redux/withRedux';
import store from '../src/configureStore';
import { EventFormContainer } from '../src/eventform';
import { TableFormContainer } from '../src/tableform';
import { SuccessModal, FailureModal } from '../src/popup';

const withReduxSettings = {
  Provider,
  store,
  // state: { optional: 'state to merge on start' },
  actions: [{ name: 'Demo Action', action: { type: 'test' } }]
};

const withReduxDecorator = withRedux(addons)(withReduxSettings);

const stories = storiesOf('Booking Forms', module);
stories.addDecorator(withReduxDecorator);

stories.add('Events', () => <EventFormContainer />);
stories.add('Book a Table', () => <TableFormContainer />);
stories.add('SuccessModal', () => (
  <SuccessModal
    onHide={() => {
      alert('hide');
    }}
  />
));
stories.add('FailureModal', () => (
  <FailureModal
    onHide={() => {
      alert('hide');
    }}
  />
));
