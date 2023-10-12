import * as icons from "../../assets/icons";
import * as images from "../../assets";
const orderDetail = [
  {
    icon: icons.faMobile,
    orderType: "Electronic",
    detail: "Mobile, Earbuds, TV",
    orderQuantity: "82.5k",
  },
  {
    backGroundColor: "bg-[#E8FADF]",
    color: "text-[#71DD37]",
    icon: icons.faPersonHalfDress,
    orderType: "Fashion",
    detail: "T-shirt, Jeans, Shoes",
    orderQuantity: "23.8k",
  },
  {
    paddingLeftRight: "px-[12px]",
    backGroundColor: "bg-[#D7F5FC]",
    color: "text-[#0DC5ED]",
    icon: icons.faHouse,
    orderType: "Decor",
    detail: " Fine Art, Dining",
    orderQuantity: "849k",
  },
  {
    backGroundColor: "bg-[#EBEEF0]",
    color: "text-[#8996A6]",
    paddingLeftRight: "px-[14px]",
    icon: icons.faFutbol,
    orderType: "Sports",
    detail: "Football, Cricket Kit",
    orderQuantity: "99",
  },
];

const transactionDetail = [
  {
    image: images.paypal,
    orderType: "Paypal",
    detail: "Send money",
    orderQuantity: "+82.6 USD",
  },
  {
    orderType: "Wallet",
    detail: "Mac'D",
    orderQuantity: "+270.69 USD",
    image: images.wellte,
  },
  {
    detail: "Refund",
    orderType: "Transfer",
    orderQuantity: "+637.91 USD",
    image: images.chart,
  },
  {
    image: images.success,
    orderType: "Credit Card",
    detail: "Ordered Food",
    orderQuantity: "-838.71 USD",
  },
  {
    image: images.wellte,
    orderType: "Wallet",
    detail: "Starbucks",
    orderQuantity: "+203.33 USD",
  },
  {
    image: images.warning,
    orderType: "Mastercard",
    detail: "Ordered Food",
    orderQuantity: " -92.45 USD",
  },
];
const companyGrowth = [
  {
    paddingLeftRight: "px-[14px]",
    icon: icons.faDollar,
    orderType: "2022",
    detail: "$32.5k",
  },
  {
    paddingLeftRight: "px-[14px]",
    image: images.walletInfo,
    orderType: "2021",
    detail: "$41.33k",
  },
];
export { transactionDetail, orderDetail, companyGrowth };
