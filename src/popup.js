import React from 'react';
import Modal from 'react-bootstrap/Modal';

export const SuccessModal = (...props) => {
  const { onHide } = props;
  return (
    <Modal {...props} size="lg" aria-labelledby="form-modal-success" centered>
      <Modal.Header closeButton>
        <Modal.Title id="form-modal-success">Thank You</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Success!</h4>
        <p>Thank you for your enquiry.</p>
        <p>
          An email has been sent to your provided email address and has been
          forwarded to our reservations team who will be in touch shortly.
        </p>
        <p>
          Please call 0207 493 9529 if you have any further questions or for
          same-day reservations
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export const FailureModal = (...props) => {
  const { onHide } = props;
  return (
    <Modal {...props} size="lg" aria-labelledby="form-modal-error" centered>
      <Modal.Header closeButton>
        <Modal.Title id="form-modal-error">Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Sorry, something went wrong</h4>
        <p>Thank you for your enquiry.</p>
        <p>
          Unfortunately, an error occurred and we were unable to process your
          request.
        </p>
        <p>
          <strong>Please call 0207 493 9529 to complete your enquiry</strong>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
