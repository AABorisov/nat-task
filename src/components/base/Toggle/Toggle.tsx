import * as React from 'react';
import cx from 'classnames';

import styles = require('./styles.scss');

interface ToggleProps {
  active?: boolean;
  onToggle?: (value: boolean) => void;
  label: string;
}

const Toggle: React.FC<ToggleProps> = ({
  active: defaultActive = true,
  onToggle = null,
  label,
}) => {
  const [active, setActive]: [boolean, Function] = React.useState(defaultActive);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { checked } = event.target;
    // Redux Action instead on next line
    setActive(checked);
    if (typeof onToggle === 'function') {
      onToggle(checked);
    }
  }

  return (
    <div>
      <label className={styles.switch} htmlFor="toggle">
        <input type="checkbox" id="toggle" onChange={handleInputChange} checked={active} />
        <span className={cx(styles.slider, styles.round)} />
      </label>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Toggle;
