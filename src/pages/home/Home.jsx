import { Helmet } from 'react-helmet';
import SectionFeatured from '../../sections/SectionFeatured';
import SectionBanner from '../../sections/SectionBanner';
import SectionArtifactCategory from '../../sections/SectionArtifactCategory';
import SectionUserContribution from '../../sections/SectionUserContribution';

const Home = () => {
  return (
    <div className="min-h-full ">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <SectionBanner />
      <SectionFeatured />
      <SectionArtifactCategory />
      <SectionUserContribution />
    </div>
  );
};

export default Home;
