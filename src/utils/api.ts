import get from './get';
import API from './constant';
import { SettingsResponseData } from '../store/settings/types';
import { ProjectStatusesResponseData } from '../store/projectStatuses/types';
import { PostsResponseData } from '../store/posts/types';
import { EarningsData, StatisticsData } from '../store/widgets/types';

export async function getPosts(): Promise<PostsResponseData> {
  const url: string = API.posts;

  const response = await get(url);

  return response;
}

export async function getProjectStatuses(): Promise<ProjectStatusesResponseData> {
  const url: string = API.projectStatuses;

  const response = await get(url);

  return response;
}

export async function getSettings(): Promise<SettingsResponseData> {
  const url: string = API.settings;

  const response = await get(url);

  return response;
}

export async function getWidgetEarnings(): Promise<EarningsData> {
  const url: string = API.widgets.earnings;

  const response = await get(url);

  return response;
}

export async function getWidgetStatistics(): Promise<StatisticsData> {
  const url: string = API.widgets.statistics;

  const response = await get(url);

  return response;
}
