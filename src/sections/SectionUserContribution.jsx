const SectionUserContribution = () => {
  return (
    <div className="bg-tertiary">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 py-20">
        {/* Title */}
        <h2 className="text-center text-3xl mb-8">
          User Contributions Spotlight
        </h2>
        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              name: 'Sumerian Clay Tablet',
              contributor: 'John Doe',
              image: 'https://i.ibb.co.com/GfXWYKc2/5.png',
            },
            {
              name: 'Egyptian Scarab Amulet',
              contributor: 'Jane Smith',
              image: 'https://i.ibb.co.com/PZzbfDcc/6.png',
            },
            {
              name: 'Viking Helmet',
              contributor: 'Alex Johnson',
              image: 'https://i.ibb.co.com/r25ZjB3D/7.png',
            },
          ].map((artifact, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg hover:shadow-xl transition"
            >
              <img
                src={artifact.image}
                alt={artifact.name}
                className="rounded-t-md h-40 w-40 mx-auto"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{artifact.name}</h3>
                <p className="text-sm text-gray-500">
                  Contributed by: {artifact.contributor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionUserContribution;
