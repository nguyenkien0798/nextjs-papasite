import Header from '../common/Header';
import { LayoutProps } from './types';
import Background from 'public/images/background-news-home.png';
import Footer from '../common/footer';

const DefaultLayout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="mx-auto h-full min-h-screen w-full overflow-y-auto">
      <Header />
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
