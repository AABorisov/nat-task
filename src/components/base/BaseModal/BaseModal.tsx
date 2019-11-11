import * as React from 'react';
import { Modal } from 'react-bootstrap';

// import styles = require('./styles.scss');

interface BaseModalProps {
  empty?: null;
}

const BaseModal: React.FC<BaseModalProps> = () => {
  return <Modal />;
};

export default BaseModal;
