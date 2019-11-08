import * as React from 'react';
import cx from 'classnames';

import styles = require('./styles.scss');

interface ToggleProps {
  active?: boolean;
}

const Toggle: React.FC<ToggleProps> = () => {
  return (
    <div>
      <span className={styles.switch}>
        <input type="checkbox" id="toggle" />
        <span className={cx(styles.slider, styles.round)} />
      </span>
      <span className={styles.label}>Show all notifications</span>
    </div>
  );
};

export default Toggle;
