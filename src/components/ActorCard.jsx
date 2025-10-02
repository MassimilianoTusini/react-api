export default function ActorCard(props) {
    const {actor} = props

    return (
        <div className="actor">
            <div className="actor-img">
                <img src={actor.image} alt={actor.name} />
            </div>
            <div className="actor-info">
                <h3 className="actor-name">{actor.name}</h3>
                <p className="birth">{actor.birth_year}</p>
                <p className="nationality">{actor.nationality}</p>
                <p className="famous-movies">{actor.most_famous_movies}</p>
                <p className="bio">{actor.biography}{ }</p>
                <p className="awards">{actor.awards}</p>
            </div>
        </div>
    )
}