import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  deliveryTime,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{deliveryTime} mins</h6>
    </div>
  );
};

export default RestaurantCard;
