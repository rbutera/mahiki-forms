import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { values, map, take } from 'rambda';
export const SuccessModal = props => {
  const { show, onHide } = props;
  return (
    <div className="success-modal">
      <Modal show onHide={onHide} bsSize="large">
        <Modal.Header closeButton>
          <Modal.Title>Thank You</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            Your enquiry has been <strong>sent successfully.</strong>
          </h5>
          <p>
            An email has been sent to your provided email address and has been
            forwarded to our reservations team who will be in touch shortly.
          </p>
          <p>
            Please call <a href="tel:+442074939529">0207 493 9529</a> if you
            require additional information or for same-day reservations.
          </p>
          <p>We hope to see you soon!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const FailureModal = props => {
  const { show, onHide, errors } = props;
  const renderErrors = err =>
    map(error => (
      <li>
        <p>{error}</p>
      </li>
    ))(take(3, values(err)));
  return (
    <div className="failure-modal">
      <Modal show onHide={onHide} bsSize="large">
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errors && <ul>{renderErrors(errors)}</ul>}
          <p>
            Please check that you have filled out all form fields correctly.
          </p>
          <p>
            <strong>
              Alternatively, call <a href="tel:+442074939529">0207 493 9529</a>{' '}
              to complete your enquiry
            </strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
