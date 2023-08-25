import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OrderCard = ({
  orderHeading,
  orderQunatity,
  orderPercentage,
  backgroundColor,
  orderIcon,
  quantityColor,
  arrowColor,
}) => {
  return (
    <div
      className={`w-full h-full md:h-32 md:w-80 ${backgroundColor} rounded-lg p-8`}
    >
      <p className="text-xl ">{orderHeading}</p>
      <div className="flex items-center mt-3">
        <p
          className={`text-2xl font-bold ${quantityColor} border-r-2 border-slate-500 w-16`}
        >
          {orderQunatity}
        </p>
        <span className="ml-4">Immpression </span>
        <span className="ml-4">{orderPercentage}</span>
        <FontAwesomeIcon className={`ml-2 ${arrowColor}`} icon={orderIcon} />
      </div>
    </div>
  );
};

export default OrderCard;
