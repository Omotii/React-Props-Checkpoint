import Container from 'react-bootstrap/Container';
import players from "../players";
import Player from "./Player";

const PlayerList = () => {

    return (
        <>
        <Container className='mt-2 card-container'>
        <Player name={players[0].name} image={players[0].imageUrl} team={players[0].team } nationality={players[0].nationality} age={players[0].age} jNumber={players[0].jerseyNumber} />
        <Player name={players[1].name} image={players[1].imageUrl} team={players[1].team } nationality={players[1].nationality} age={players[1].age} jNumber={players[1].jerseyNumber} />
        </Container>
        <Container className='mt-2 card-container'>
        <Player name={players[2].name} image={players[2].imageUrl} team={players[2].team } nationality={players[2].nationality} age={players[2].age} jNumber={players[2].jerseyNumber} />
        <Player name={players[3].name} image={players[3].imageUrl} team={players[3].team } nationality={players[3].nationality} age={players[3].age} jNumber={players[3].jerseyNumber} />
        </Container>
        <Container className='mt-2 card-container'>
        <Player name={players[4].name} image={players[4].imageUrl} team={players[4].team } nationality={players[4].nationality} age={players[4].age} jNumber={players[4].jerseyNumber} />
        <Player name={players[5].name} image={players[5].imageUrl} team={players[5].team } nationality={players[5].nationality} age={players[5].age} jNumber={players[5].jerseyNumber} />
        </Container>
        </>
    )
}

export default PlayerList;
