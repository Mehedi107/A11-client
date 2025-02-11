import DiscoverArtifactCategory from '../../components/discover_artifact_category/DiscoverArtifactCategory';
import UserContribution from '../../components/user_contribution/UserContribution';
import { Helmet } from 'react-helmet';
import SectionFeatured from '../../sections/SectionFeatured';
import SectionBanner from '../../sections/SectionBanner';

const Home = () => {
  return (
    <div className="min-h-full ">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <SectionBanner />
      <SectionFeatured />

      {/* Discover Artifact Category */}
      <DiscoverArtifactCategory></DiscoverArtifactCategory>
      {/* User contribution spotlight */}
      <UserContribution></UserContribution>
    </div>
  );
};

export default Home;
