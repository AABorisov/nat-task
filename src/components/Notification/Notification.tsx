import * as React from 'react';
import MainElement from '../Main/MainElement';

import styles = require('./styles.scss');

// interface NotificationProps {}

const Notification: React.FC<{}> = () => {
  return (
    <MainElement>
      <div className={styles.wrapper}>
        <img className={styles.icon} alt="" src="public/assets/notifications_none_24px.png" />
        <div className={styles.notification}>
          <div className={styles.title}>
            Don’t forget to publish weekly notes about manager’s work!
          </div>
          <div className={styles.content}>Notification will be closed after 8 seconds</div>
        </div>
        <div className={styles.cross}>X</div>
      </div>
    </MainElement>
  );
};

export default Notification;
