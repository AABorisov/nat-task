import * as React from 'react';

// import styles = require('./styles.scss');
import MainElement from '../Main/MainElement';
import ProjectStatusesTable from './ProjectStatusesTable';
import { ProjectStatus } from './types';
import { ModeEnum } from '../ModeBar/types';

interface ProjectStatusesProps {
  mode: ModeEnum;
}

const projectStatusesTable: Array<ProjectStatus> = [
  {
    id: 0,
    project: 'Alpha project',
    company: 'Inceptos Hymenaeos Ltd',
    status: 52,
    realiseDate: new Date('Nov 12, 2019').getTime(),
  },
  {
    id: 1,
    project: 'Betha project',
    company: 'Nec Euismod In Company',
    status: 23,
    realiseDate: new Date('Dec 9, 2019').getTime(),
  },
  {
    id: 2,
    project: 'Gamma project',
    company: 'Erat Volutpat',
    status: 25,
    realiseDate: new Date('Dec 25, 2019').getTime(),
  },
  {
    id: 3,
    project: 'Sigma project',
    company: 'Tellus Ltd',
    status: 48,
    realiseDate: new Date('Nov 25, 2019').getTime(),
  },
  {
    id: 4,
    project: 'Kappa project',
    company: 'Hymenaeos Ltd',
    status: 89,
    realiseDate: new Date('Oct 20, 2019').getTime(),
  },
  {
    id: 5,
    project: 'Omega project',
    company: 'Gessertinno Llc',
    status: 56,
    realiseDate: new Date('Nov 22, 2019').getTime(),
  },
  {
    id: 6,
    project: 'Tetha project',
    company: 'Umbralora Montro',
    status: 95,
    realiseDate: new Date('Oct 16, 2019').getTime(),
  },
  {
    id: 7,
    project: 'Epsilon project',
    company: 'Poprisi Company',
    status: 85,
    realiseDate: new Date('Oct 25, 2019').getTime(),
  },
  {
    id: 8,
    project: 'Delta project',
    company: 'Fergana Trast Nationale',
    status: 75,
    realiseDate: new Date('Nov 1, 2019').getTime(),
  },
];

const ProjectStatuses: React.FC<ProjectStatusesProps> = ({ mode = ModeEnum.dashboard }) => {
  return (
    <MainElement title="Project statuses">
      <ProjectStatusesTable projectStatuses={projectStatusesTable} mode={mode} />
    </MainElement>
  );
};

export default ProjectStatuses;
