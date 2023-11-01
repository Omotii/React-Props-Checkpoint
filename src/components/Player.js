import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css'

const Player = ({name = "FIFA player", team = "Club Side", nationality = "Country", age = "Football age", jNumber = "30", image = '/images/cr7.jpg'}) => {
    return (
        <>
        
            <Card className="card">
                <div className="card-internal-container">
                    <div className="card-image-container">
                        <Card.Img src={image} alt="Player image"/>
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="mb-0">Team: {team}</Card.Text>
                        <Card.Text className="mb-0">Country: {nationality}</Card.Text>
                        <Card.Text className="mb-0">Age: {age}</Card.Text>
                        <Card.Text>Jersey Number: {jNumber}</Card.Text>
                        <Button className="secondary">Enter PES</Button>
                    </Card.Body>
                </div>
            </Card>

        </>
    )
}

export default Player;