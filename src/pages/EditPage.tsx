import * as React from 'react';
import Main from '../components/Main/Main';
import { ModeEnum } from '../components/ModeBar/types';
import Posts from '../components/Posts/Posts';
import ProjectStatuses from '../components/ProjectsStatuses/ProjectStatuses';
import NotificationsSetting from '../components/Settings/NotificationsSetting';

const EditPage: React.FC<{}> = () => {
  const mode = ModeEnum.edit;
  return (
    <Main mode={mode}>
      <Posts mode={mode} />
      <ProjectStatuses mode={mode} />
      <NotificationsSetting />
    </Main>
  );
};

export default EditPage;
