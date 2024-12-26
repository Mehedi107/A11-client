const UserContribution = () => {
  return (
    <div className="bg-tertiary">
      <div className="container mx-auto px-5 py-16">
        {/* Title */}
        <h2 className="text-center text-3xl mb-8">
          User Contributions Spotlight
        </h2>
        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Sumerian Clay Tablet',
              contributor: 'John Doe',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7JEO1-vai3k7uOfzo_0ZgWN_6wxXyDopgQ&s',
            },
            {
              name: 'Egyptian Scarab Amulet',
              contributor: 'Jane Smith',
              image:
                'https://i.etsystatic.com/21964910/r/il/ca96eb/6086225553/il_570xN.6086225553_lzi7.jpg',
            },
            {
              name: 'Viking Helmet',
              contributor: 'Alex Johnson',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTarFzMhE2tQBmoPlasX2OwlwQlmK7bjJGgQ&s',
            },
          ].map((artifact, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg hover:shadow-xl transition"
            >
              <img
                src={artifact.image}
                alt={artifact.name}
                className="rounded-t-md h-40 w-full object-cover"
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

export default UserContribution;
