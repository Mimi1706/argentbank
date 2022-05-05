import "./FeatureItem.css"

const FeatureItem = (props) => {
  return (
    <article className="featureItem">
      <img src={props.img} alt="Feature item icon" className="featureIcon" />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </article>
  )
}

export default FeatureItem
