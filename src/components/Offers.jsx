import { FaClock } from "react-icons/fa";
import { FiGift, FiPercent } from "react-icons/fi";

const currentOffers = [
  {
    id: 1,
    title: "Summer Sale - Up to 30% Off!",
    description:
      "Enjoy our exclusive summer sale with discounts up to 30% on selected perfumes. Limited time offer!",
    discount: "30%",
    endDate: "2026-08-31",
    code: "SUMMER30",
    bgColor: "bg-amber-200",
    textColor: "text-amber-700",
  },
  {
    id: 2,
    title: "Free Perfume Sample with Every Order!",
    description:
      "For a limited time, receive a complimentary perfume sample with every purchase. Discover your new favorite scent today!",
    discount: "Gift",
    endDate: "2026-08-31",
    code: "FREESAMPLE",
    bgColor: "bg-purple-200",
    textColor: "text-purple-700",
  },
  {
    id: 3,
    title: "New launch Discount",
    discount: "20%",
    description:
      "Celebrate the launch of our new fragrance line with a special 20% discount on all new arrivals. Use code NEW20 at checkout!",
    endDate: "2024-08-31",
    code: "NEW20",
    bgColor: "bg-pink-200",
    textColor: "text-pink-700",
  },
];

const Offers = () => {
  return (
    <section id="offers" className="container scroll-mt-20 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2 text-amber-900">
        Special Offers
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Take advantage of these limited-time offers and elevate your fragrance
        collection today!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentOffers.map((offers) => (
          <div
            key={offers.id}
            className={`${offers.bgColor} rounded-xl shadow-lg overflow-hidden 
                transition-transform duration-300 hover:scale-105
                `}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className={`${offers.textColor} text-xl font-semibold`}>
                  {offers.title}
                </h3>
                {offers.discount.includes("%") ? (
                  <span className="bg-white rounded-full p-3 shadow-md">
                    <FiPercent className={`${offers.textColor}  text-2xl `} />
                  </span>
                ) : (
                  <span className="bg-white rounded-full p-3 shadow-md">
                    <FiGift className={`${offers.textColor}  text-2xl `} />
                  </span>
                )}
              </div>
              <p className="text-gray-700 mb-6 ">{offers.description}</p>
              <div className="flex items-center text-gray-600 mb-6">
                <FaClock className="mr-2" />
                <span>Ends on {offers.endDate}</span>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-500 mb-1">Use Code</p>
                <p className="font-mono font-bold text-lg">{offers.code}</p>
              </div>
              <button
                className={`w-full py-3 rounded-lg ${
                  offers.textColor
                } font-semibold
                        border ${offers.textColor.replace(
                          "text",
                          "border"
                        )} hover:bg-white`}
              >
                claim Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
