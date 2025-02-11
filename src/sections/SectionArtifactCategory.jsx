const SectionArtifactCategory = () => {
  return (
    <div className="bg-base-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 py-16">
        {/* Title */}
        <h2 className="text-center mb-8">Discover Artifact Categories</h2>
        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-6 md:gap-5 gap-4 justify-between">
          {[
            {
              name: 'Ancient Tools',
              image: 'https://i.ibb.co.com/Fbgpgw7t/c1.png',
            },
            {
              name: 'Historical Documents',
              image: 'https://i.ibb.co.com/qLw6NJKF/c2.png',
            },
            {
              name: 'Archaeological Finds',
              image: 'https://i.ibb.co.com/60xXZpGv/c3.png',
            },
            {
              name: 'Cultural Relics',
              image: 'https://i.ibb.co.com/LzTkMsKg/c4.png',
            },
          ].map((category, index) => (
            <div
              key={index}
              className="card rounded-lg shadow-md hover:scale-105 hover:shadow-lg bg-white transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="rounded-t-md h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-base md:text-lg font-semibold text-center">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionArtifactCategory;
