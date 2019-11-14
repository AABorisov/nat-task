import * as React from 'react';
import { connect } from 'react-redux';
import MainElement from '../Main/MainElement';
import { AppState } from '../../store';

import styles = require('./styles.scss');

interface NotificationStateProps {
  showNotification: boolean;
}

type NotificationProps = NotificationStateProps;

const Notification: React.FC<NotificationProps> = ({
  showNotification: defaultShowNotification,
}) => {
  const [showNotification, setNotification]: [boolean, Function] = React.useState(
    defaultShowNotification
  );

  React.useEffect((): void => {
    setNotification(defaultShowNotification);
  }, [defaultShowNotification]);

  function closeNotification(): void {
    setNotification(false);
  }

  React.useEffect((): (() => void) => {
    if (showNotification) {
      const timer = setTimeout(closeNotification, 8000);
      return (): void => {
        clearTimeout(timer);
      };
    }
    return (): void => {};
  }, [showNotification]);

  return showNotification ? (
    <MainElement>
      <div className={styles.wrapper}>
        <img className={styles.icon} alt="" src="public/assets/notifications_none_24px.png" />
        <div className={styles.notification}>
          <div className={styles.title}>
            Don’t forget to publish weekly notes about manager’s work!
          </div>
          <div className={styles.content}>Notification will be closed after 8 seconds</div>
        </div>
        <button type="button" className={styles.cross} onClick={closeNotification}>
          X
        </button>
      </div>
    </MainElement>
  ) : null;
};

const mapStateToProps = (state: AppState): NotificationStateProps => ({
  showNotification: state.settings.showNotifications,
});

export default connect(mapStateToProps)(Notification);
