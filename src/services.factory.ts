import { DataSource } from 'typeorm';
import { MovieRepository } from './api/movies/movie.repository';
import { MovieService } from './api/movies/movie.service';

export interface Services {
  movieService: MovieService;
}

export class ServicesFactory {
  public readonly services: Services;

  constructor(private dataSource: DataSource) {
    const movieRepository = new MovieRepository(dataSource);

    const movieService = new MovieService(movieRepository);

    this.services = {
      movieService,
    };
  }
}
