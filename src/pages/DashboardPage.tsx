import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main/Main';
import { ModeEnum } from '../components/ModeBar/types';
import Widgets from '../components/Widgets/Widgets';
import Posts from '../components/Posts/Posts';
import Notification from '../components/Notification/Notification';
import ProjectStatuses from '../components/ProjectsStatuses/ProjectStatuses';
import { SetModeAction } from '../store/mode/types';
import { setMode as setModeAction } from '../store/mode/actions';

interface PageDispatchProps {
  setMode: (mode: ModeEnum) => SetModeAction;
}

const DashboardPage: React.FC<PageDispatchProps> = ({ setMode }) => {
  const mode = ModeEnum.dashboard;
  setMode(mode);
  return (
    <Main mode={mode}>
      <Widgets />
      <Posts />
      <Notification />
      <ProjectStatuses />
    </Main>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): PageDispatchProps =>
  bindActionCreators({ setMode: setModeAction }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(DashboardPage);
