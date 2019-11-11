import * as React from 'react';
import cx from 'classnames';

import styles = require('./styles.scss');

interface ToggleProps {
  active?: boolean;
  onToggle?: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ active: defaultActive = true }) => {
  const [active, setActive]: [boolean, Function] = React.useState(defaultActive);
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    // Redux Action instead on next line
    setActive(event.target.checked);
  }

  return (
    <div>
      <label className={styles.switch} htmlFor="toggle">
        <input type="checkbox" id="toggle" onChange={handleInputChange} checked={active} />
        <span className={cx(styles.slider, styles.round)} />
      </label>
      <span className={styles.label}>Show all notifications</span>
    </div>
  );
};

export default Toggle;
