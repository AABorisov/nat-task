import * as React from 'react';
import Main from '../components/Main/Main';
import { ModeEnum } from '../components/ModeBar/types';
import Widgets from '../components/Widgets/Widgets';
import Posts from '../components/Posts/Posts';
import Notification from '../components/Notification/Notification';
import ProjectStatuses from '../components/ProjectsStatuses/ProjectStatuses';

const DashboardPage: React.FC<{}> = () => {
  const mode = ModeEnum.dashboard;
  return (
    <Main mode={mode}>
      <Widgets />
      <Posts mode={mode} />
      <Notification />
      <ProjectStatuses mode={mode} />
    </Main>
  );
};

export default DashboardPage;
