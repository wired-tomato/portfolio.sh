// // List of commands that require API calls

import { getModrinthProjects, getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

export const github_projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};

export const modrinth_projects = async (args: string[]): Promise<string> => {
  const projects = await getModrinthProjects();

  return projects
    .map(
      (project) =>
        `${project.title} - ${project.description} | <a class="text-light-blue dark:text-dark-blue underline" href="https://modrinth.com/${project.project_type}/${project.id}" target="_blank">https://modrinth.com/${project.project_type}/${project.slug}</a>`,
      )
    .join('\n');
};
