import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getModrinthProjects = async () => {
  const { data } = await axios.get(
    `https://api.modrinth.com/v2/user/${config.social.modrinth}/projects`,
    {
      headers: {
        'User-Agent': 'wired-tomato/portfolio.sh/1.0.0 (wiredtomato.net)',
      },
    },
  );
  return data;
};
