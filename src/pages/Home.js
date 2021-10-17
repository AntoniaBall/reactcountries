import Navigation from '../components/Navigation';

const Home = () =>{
    return (
        // 1 balise supérieure à toutes les autres obligatoire
        <div className="home">
            <Navigation/>
            <h1>Hello React</h1>
        </div>
    )
}

export default Home;