import * as React from 'react';
import cx from 'classnames';

import styles = require('./styles.scss');

interface WidgetProps {
  children?: JSX.Element | Array<JSX.Element>;
  className?: string;
}

const Widget: React.FC<WidgetProps> = ({ children, className }) => {
  return <div className={cx(styles.widget, className)}>{children}</div>;
};

export default Widget;
