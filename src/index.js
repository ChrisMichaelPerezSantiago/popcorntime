const _ = require('lodash');
const f = require('./utils/fetch');

const movies = async (options) => {
  const res = await f(`https://api.apipop.net/list?sort=${options.sortby}&short=1&cb=&quality=720p,1080p,3d&page=${options.page}&ver=100.0.0.0.&os=windows&app_id=T4P_ONL&genre=${options.genre}&keywords=${options.q}`)
  const { MovieList: data } = res;
  
  const all = _.map(data, async props => {
    const [
      actors, description, directors, genres, id, imdb, items, items_lang, popularity, poster_big, poster_med, rating, runtime, title, trailer, writers, year
    ] = _.map(_.pick(props, [
        'actors', 
        'description', 
        'directors', 
        'genres', 
        'id', 
        'imdb', 
        'items', 
        'items_lang', 
        'popularity', 
        'poster_big', 
        'poster_med', 
        'rating', 
        'runtime', 
        'title', 
        'trailer', 
        'writers', 
        'year'
      ]));
    const trailer_url = `https://www.youtube.com/embed/${trailer}`;
    const torrentsData = await getMovieTorrents(imdb);
    const torrents = _.pick(torrentsData, ['items']);
    return {
      actors, description, directors, genres, items, items_lang, popularity, poster_big, poster_med, rating, runtime, title, trailer_url, writers, year, torrents
    }
  });
  
  return await Promise.all(all);
}

const shows = async (options) => {
  const res = await f(`https://api.apipop.net/shows?sort=${options.sortby}&short=1&cb=&quality=720p,1080p,3d&page=${options.page}&ver=100.0.0.0.&os=windows&app_id=T4P_ONL&genre=${options.genre}&keywords=${options.q}`)
  const { MovieList: data } = res;
  
  const all = _.map(data, async props => {
    const [
      actors, description, directors, genres, id, imdb, items, items_lang, popularity, poster_big, poster_med, rating, runtime, title, trailer, writers, year
    ] = _.map(_.pick(props, [
        'actors', 
        'description', 
        'directors', 
        'genres', 
        'id', 
        'imdb', 
        'items', 
        'items_lang', 
        'popularity', 
        'poster_big', 
        'poster_med', 
        'rating', 
        'runtime', 
        'title', 
        'trailer', 
        'writers', 
        'year'
      ]));
    const trailer_url = `https://www.youtube.com/embed/${trailer}`;
    const torrents = await getShowTorrents(imdb);
    return {
      actors, description, directors, genres, items, items_lang, popularity, poster_big, poster_med, rating, runtime, title, trailer_url, writers, year, torrents
    }
  });
  
  return await Promise.all(all);
}

const animeShows = async(options) =>{
  const res = await f(`https://api-anime.apipop.net/shows?cb=0.1558950135655226&sort=${options.sortby}&page=${options.page}&ver=100.0.0.0.&os=windows&app_id=T4P_ONL&genre=${options.genre}`)
  const { MovieList: data } = res;  

  const all = _.map(data, async props => {
    let [
      id,yts,tmdb,title,year,rating,imdb,actors,writers,directors,trailer,description,poster_med,poster_big,genres
    ] = _.map(_.pick(props, [
      'id',
      'yts',
      'tmdb',
      'title',
      'year',
      'rating',
      'imdb',
      'actors',
      'writers',
      'directors',
      'trailer',
      'description',
      'poster_med',
      'poster_big',
      'genres'
      ]));

    description = description && description.replace(/(\r\n|\n|\r|\\n)/gm, '');
    const torrents = await getAnimeShowTorrents(imdb);

    return {
      title,year,rating,imdb,actors,writers,directors,description,poster_med,poster_big,genres, torrents
    }
  });
  
  return await Promise.all(all);
}

const getMovieTorrents = async (imdb) => {
  return new Promise(async(resolve, reject) =>{
    try {
      const data = await f(`https://api.apipop.net/movie?cb=&quality=720p,1080p,3d&page=1&imdb=${imdb}&ver=100.0.0.0.&os=windows&app_id=T4P_ONL`);
      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};

const getShowTorrents = async (imdb) => {
  return new Promise(async(resolve, reject) =>{
    try {
      const res = await f(`https://api.apipop.net/show?imdb=${imdb}&ver=100.0.0.0.&os=windows&app_id=T4P_ONL`);
      const data = _.chain(_.map(res))
          .map((value, key) => ({ season: key + 1, data: value }))
          .value()

      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};

const getAnimeShowTorrents = async (imdb) => {
  return new Promise(async(resolve, reject) =>{
    try {
      const res = await f(`https://api-anime.apipop.net/show?imdb=${imdb}&ver=100.0.0.0.&os=windows&app_id=T4P_ONL`);
      const data = _.chain(_.map(res))
          .map((value, key) => ({ season: key + 1, data: value }))
          .value()

      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};

module.exports = {
  movies,
  shows,
  animeShows
};