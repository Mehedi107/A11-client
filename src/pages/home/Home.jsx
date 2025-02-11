import DiscoverArtifactCategory from '../../sections/SectionArtifactCategory';
import UserContribution from '../../components/user_contribution/UserContribution';
import { Helmet } from 'react-helmet';
import SectionFeatured from '../../sections/SectionFeatured';
import SectionBanner from '../../sections/SectionBanner';
import SectionArtifactCategory from '../../sections/SectionArtifactCategory';

const Home = () => {
  return (
    <div className="min-h-full ">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <SectionBanner />
      <SectionFeatured />
      <SectionArtifactCategory />
      <UserContribution></UserContribution>
    </div>
  );
};

export default Home;
