import NavigationBar from './NavigationBar';
import './styles.css';

const Heading = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center" id="container" fluid>
                <header className="header">
                    <img src="/images/ball.png" alt="ball" style={{ width: "50px", margin: "5px 10px 0 0"}} />
                    <div className="header-title-container">
                        <h1>FIFA Player PES 2024</h1>
                        <p>Enjoy the thrill, feel the moment and stay entertained.</p>
                    </div>                    
                </header>
                <div className="Navbar">
                    <NavigationBar />
                </div>
            </div>
        </>
    )
}

export default Heading;