const MovieCard = ({ list }) => {
  console.log('List',list);
  return (
    <div className="movie-card">
      <div className="overlay">
        <img
            style={{zIndex:'-1'}}
          src={`https://image.tmdb.org/t/p/w200${ list &&  list.poster_path}`}
          alt={`${list && list.title} Poster`}
        />
      </div>
    </div>
  );
};

export default MovieCard;
