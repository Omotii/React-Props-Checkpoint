import Container from 'react-bootstrap/Container';
import players from "../players";
import Player from "./Player";

const PlayerList = () => {

    return (
        <>
        <Container className='mt-2 card-container'>
            { players.map( player => <Player {...player}/> ) }        
        </Container>
        </>
    )
}

export default PlayerList;

// {player.map(
//     (player) => {
//         return (
//             <Player {...player}/>
//         )
//     }
// )}
