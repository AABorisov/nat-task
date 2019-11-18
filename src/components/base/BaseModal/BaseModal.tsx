import * as React from 'react';

import styles = require('./styles.scss');

interface BaseModalProps {
  headerTitle?: string;
  children: JSX.Element | Array<JSX.Element>;
  onModalClose: Function;
  footerRender?: () => JSX.Element;
}

const BaseModal: React.FC<BaseModalProps> = ({
  headerTitle,
  children,
  onModalClose,
  footerRender,
}) => {
  React.useEffect((): (() => void) => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  function onActionClick(onAction: Function): (event: React.MouseEvent<HTMLButtonElement>) => void {
    return (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      if (typeof onAction === 'function') {
        onAction();
      }
    };
  }
  return (
    <>
      <div className={styles.backdrop} />
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.crossButton}
          onClick={onActionClick(onModalClose)}
          aria-label="Close"
        />
        {headerTitle && (
          <header className={styles.modalHeader}>
            <h1>{headerTitle}</h1>
          </header>
        )}
        <section className={styles.modalContent}>{children}</section>
        {footerRender && footerRender()}
      </div>
    </>
  );
};

export default BaseModal;
