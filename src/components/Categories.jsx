import product10 from "/kuroswan972_I_want_to_create_a_cube_stunning_photo_of_the_Mysti_14ae08f2-16bb-4e85-b781-bf371c99faf1 1.png";
import product11 from "/pexels-valeria-boltneva-1961791 1.png";
import product12 from "/megaerica_Carbonated_perfume_in_a_bottle_6a49a0c4-198a-4f33-a2d6-a0c8eee0c9d8ddef 1.png";
import product13 from "/Group 17.png";
import product14 from "/Thong_Nguyen_Products_photoshoot_luxury_perfume_essential_oil_g_8013e01a-119f-4c35-a339-9c07a17ab672 1.png";
import product15 from "/wcwsc 1.png";

const categories = [
  {
    img: product10,
    alt: "Men's Perfumes",
    title: "Men's Collections",
    description:
      "Explore our exclusive collection of men's perfumes, featuring timeless scents for every occasion.",
  },
  {
    img: product11,
    alt: "Women's Perfumes",
    title: "Women's Collections",
    description:
      "Discover a range of elegant and alluring fragrances designed for women who appreciate sophistication.",
  },
  {
    img: product12,
    alt: "Unisex Perfumes",
    title: "Unisex Collections",
    description:
      "Unveil a blend of fragrances that transcend gender, perfect for anyone seeking a fresh, versatile scent.",
  },
  {
    img: product13,
    alt: "Arabic Oud",
    title: "Arabic Oud",
    description:
      "Indulge in the rich and exotic aroma of Arabic Oud, offering a deep, luxurious scent from the Middle East.",
  },
  {
    img: product14,
    alt: "Luxury Perfumes",
    title: "Luxury Collections",
    description:
      "Experience the pinnacle of fragrance luxury with our premium collection of high-end perfumes.",
  },
  {
    img: product15,
    alt: "Gift Sets",
    title: "Gift Packages",
    description:
      "Give the gift of fragrance with our beautifully curated gift sets, perfect for any special occasion.",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 scroll-mt-20 bg-white">
      <div className="container mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-950 mb-3">
            Explore Our Perfume Collections
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {categories.map((catagory, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md 
                hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={catagory.img}
                  alt={catagory.alt}
                  className="w-full h-75 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {catagory.title}
                  </h3>
                  <p className="text-gray-200 mt-1">{catagory.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
