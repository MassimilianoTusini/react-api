export default function ActressCard(props) {
    const {actress} = props

    return (
        <div className="actor">
            <div className="actor-img">
                <img src={actress.image} alt={actress.name}/>
            </div>
            <div className="actor-info">
                <h3 className="actor-name">{actress.name}</h3>
                <p className="birth">{actress.birth_year}</p>
                <p className="nationality">{actress.nationality}</p>
                <p className="famous-movies">{actress.most_famous_movies}</p>
                <p className="bio">{actress.biography}</p>
                <p className="awards">{actress.awards}</p>
            </div>
        </div>
        
    )
}