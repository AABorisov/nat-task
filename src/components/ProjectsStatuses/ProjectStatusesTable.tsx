import * as React from 'react';
import { ProjectStatus } from './types';
import { ModeEnum } from '../ModeBar/types';

import styles = require('./styles.scss');

interface ProjectStatusesTableProps {
  projectStatuses: Array<ProjectStatus>;
  mode: ModeEnum;
}

const ProjectStatusesTable: React.FC<ProjectStatusesTableProps> = ({ projectStatuses, mode }) => {
  const isDashbord = mode === ModeEnum.dashboard;
  function renderStatusLine(project: ProjectStatus): JSX.Element {
    return (
      <div className={styles.statusLine} key={`${project.id}_line`}>
        <div
          className={styles.progressStatusLine}
          style={{
            width: `${project.status}%`,
          }}
        />
      </div>
    );
  }
  return (
    <div className={styles.projectStatusesWrapper}>
      <div className={styles.projectStatusesTable}>
        <div className={styles.header}>Project</div>
        <div className={styles.header}>Company</div>
        <div className={styles.header}>Status</div>
        <div />
        <div className={styles.header}>Realise Date</div>
        {!isDashbord && <div />}
        {projectStatuses.reduce((grid, project) => {
          return grid.concat([
            <div key={`${project.id}_project`}>{project.project}</div>,
            <div key={`${project.id}_company`}>{project.company}</div>,
            <div key={`${project.id}_status`}>{`${project.status}%`}</div>,
            renderStatusLine(project),
            <div key={`${project.id}_realiseDate`}>
              {new Date(project.realiseDate).toDateString()}
            </div>,
            !isDashbord && <div key={`${project.id}_remove`}>x</div>,
          ]);
        }, [])}
      </div>
    </div>
  );
};

export default ProjectStatusesTable;
