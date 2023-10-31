import Header from '../../components/Header/Header';
import About from '../../components/About';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Products from '../../components/Products';
import Projects from '../../components/Projects';
import Testimonials from '../../components/Testimonials';
import Question from '../../components/Question';
import MeetTheTeam from '../../components/MeetTheTeam';
import Clients from '../../components/Clients';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Services />
            <Products />
            <Question />
            <Projects />
            <Testimonials />
            <MeetTheTeam />
            <Clients />
            <Footer />
        </div>
    )
}

export default Home;