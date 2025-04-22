const moviesInitialState = {
  movies: null,
  shows: null,
  filters: {},
  featured: null,
  current: null
}

export function moviesSlice(state = moviesInitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}