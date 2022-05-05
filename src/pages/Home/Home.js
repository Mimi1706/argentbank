import "./Home.css"

import heroBannerImg from "../../assets/banner.jpeg"
import FeatureItem from "../../components/FeatureItem/FeatureItem"

import featureItemImg1 from "../../assets/FeatureItem/icon-chat.png"
import featureItemImg2 from "../../assets/FeatureItem/icon-money.png"
import featureItemImg3 from "../../assets/FeatureItem/icon-security.png"

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
        <FeatureItem
          img={featureItemImg1}
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          img={featureItemImg2}
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          img={featureItemImg3}
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe. "
        />
      </section>
    </main>
  )
}

export default Home
