import "./Items.css";
const Items = (props) => {
  const { data } = props;
  const { appId, appName, imageUrl, category } = data;
  return (
    <li>
      <img src={imageUrl} alt={appName} className="img-logo" />
      <h5>{appName}</h5>
    </li>
  );
};

export default Items;
