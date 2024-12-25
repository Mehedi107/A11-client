const DiscoverArtifactCategory = () => {
  return (
    <div className="container mx-auto px-5 py-16">
      {/* Title */}
      <h2 className="text-center text-2xl mb-8">
        Discover Artifact Categories
      </h2>
      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            name: 'Ancient Tools',
            image:
              'https://communityartsnyc.wordpress.com/wp-content/uploads/2018/02/artifact-art.jpg?w=640',
          },
          {
            name: 'Historical Documents',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYt974HUMuBHRqLlXfl90igYulUvKZBBjXfV73mdgssSqxRW3_ynYnloHi5wcEflcBnQ&usqp=CAU',
          },
          {
            name: 'Archaeological Finds',
            image:
              'https://p.turbosquid.com/ts-thumb/eH/bDsXr4/I2/55555555/jpg/1661185351/600x600/fit_q87/3ebf3dcf551f356c89b8975a6a62ad99cc977770/55555555.jpg',
          },
          {
            name: 'Cultural Relics',
            image:
              'https://static.cambridge.org/binary/version/id/urn:cambridge.org:id:binary:20200713082533985-0375:S0959774319000726:S0959774319000726_fig5.png?pub-status=live',
          },
        ].map((category, index) => (
          <div
            key={index}
            className="card shadow-lg hover:shadow-xl transition"
          >
            <img
              src={category.image}
              alt={category.name}
              className="rounded-t-md h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverArtifactCategory;
