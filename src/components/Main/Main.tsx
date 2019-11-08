import * as React from 'react';
import Widgets from '../Widgets/Widgets';
import Posts from '../Posts/Posts';
import Notification from '../Notification/Notification';
import ProjectStatuses from '../ProjectsStatuses/ProjectStatuses';
import NotificationsSetting from '../Settings/NotificationsSetting';
import { ModeEnum } from '../ModeBar/types';

import styles = require('./styles.scss');

interface MainProps {
  mode: ModeEnum;
}

const Main: React.FC<MainProps> = ({ mode = ModeEnum.dashboard }) => {
  const isDashboard = mode === ModeEnum.dashboard;
  return (
    <main className={styles.main}>
      {isDashboard && <Widgets />}
      <Posts mode={mode} />
      {isDashboard && <Notification />}
      <ProjectStatuses mode={mode} />
      {!isDashboard && <NotificationsSetting />}
    </main>
  );
};

export default Main;
