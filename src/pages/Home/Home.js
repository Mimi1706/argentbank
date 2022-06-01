import "./Home.css"

import heroBannerImg from "../../assets/banner.jpeg"
import FeatureItem from "../../components/FeatureItem/FeatureItem"

import { featureItems } from "../../data/featureItems"

const Home = () => {
  return (
    <main>
      <div className="heroBannerHome">
        <img
          src={heroBannerImg}
          alt="Plant growing in a transparent pot filled with coins"
          className="heroBannerImg"
        ></img>
        <div className="heroBannerText">
          <span className="subtitle">No fees.</span>
          <span className="subtitle">No minimum deposit.</span>
          <span className="subtitle">High interest rates.</span>
          <p>Open a savings account with Argent Bank today!</p>
        </div>
      </div>
      <section className="featureItems">
        {featureItems.map(({ img, title, text }, index) => (
          <FeatureItem
            key={`featureItem-${index}`}
            title={title}
            img={img}
            text={text}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
