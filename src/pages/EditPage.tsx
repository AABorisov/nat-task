import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main/Main';
import { ModeEnum } from '../components/ModeBar/types';
import Posts from '../components/Posts/Posts';
import ProjectStatuses from '../components/ProjectsStatuses/ProjectStatuses';
import NotificationsSetting from '../components/Settings/NotificationsSetting';
import { SetModeAction } from '../store/mode/types';
import { setMode as setModeAction } from '../store/mode/actions';

interface PageDispatchProps {
  setMode: (mode: ModeEnum) => SetModeAction;
}
const EditPage: React.FC<PageDispatchProps> = ({ setMode }) => {
  const mode = ModeEnum.edit;
  setMode(mode);
  return (
    <Main mode={mode}>
      <Posts />
      <ProjectStatuses />
      <NotificationsSetting />
    </Main>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): PageDispatchProps =>
  bindActionCreators({ setMode: setModeAction }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(EditPage);
