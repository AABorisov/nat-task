import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import MainElement from '../Main/MainElement';
import ProjectStatusesTable from './ProjectStatusesTable';
import { ModeEnum } from '../ModeBar/types';
import {
  ProjectStatusesResponseData,
  RemoveProjectStatusAction,
} from '../../store/projectStatuses/types';
import { AppState } from '../../store';
import { removeProjectStatus as removeProjectStatusAction } from '../../store/projectStatuses/actions';

interface ProjectStatusesStateProps extends ProjectStatusesResponseData {
  mode: ModeEnum;
}
interface ProjectStatusesDispatchProps {
  removeProjectStatus: (id: number) => RemoveProjectStatusAction;
}
type ProjectStatusesProps = ProjectStatusesStateProps & ProjectStatusesDispatchProps;

const ProjectStatuses: React.FC<ProjectStatusesProps> = ({
  mode,
  projectStatuses,
  removeProjectStatus,
}) => {
  return (
    <MainElement title="Project statuses">
      <ProjectStatusesTable
        projectStatuses={projectStatuses}
        mode={mode}
        onRemove={removeProjectStatus}
      />
    </MainElement>
  );
};

const mapStateToProps = (state: AppState): ProjectStatusesStateProps => ({
  projectStatuses: state.projectStatuses.projectStatuses,
  mode: state.mode,
});

const mapDispatchToProps = (dispatch: Dispatch): ProjectStatusesDispatchProps =>
  bindActionCreators(
    {
      removeProjectStatus: removeProjectStatusAction,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectStatuses);
