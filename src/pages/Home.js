import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Countries from '../components/Countries';

const Home = () =>{
    return (
        // 1 balise supérieure à toutes les autres obligatoire
        <div className="home">
            <Navigation/>
            <Logo/>
            <Countries/>
        </div>
    )
}

export default Home;