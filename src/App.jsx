import { useEffect, useState } from 'react';
import './sass/main.scss';

import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

// Components
import Header from './components/Header';
import Banner from './components/Banner';
import Loader from './components/Loader';
import { LayoutGroup } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <LayoutGroup id="a">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  src={`/images/image-2.jpg`}
                  layoutId="main-image-1"
                  transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 1.6 }}
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;
