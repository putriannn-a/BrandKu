import CardGrid from "../component/CardGrid";
import Hero from "../component/Hero"
import { featureData } from "../data/features";

const Home = () => {
  return(
    <main>
      <section>
        <Hero/>
      </section>
      <CardGrid features={featureData} />
      <section>
      </section>
    </main>
  )
}

export default Home;