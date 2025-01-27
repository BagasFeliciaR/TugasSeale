import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Container } from '../../styles/globalStyles';
import { HomeContentSection, Content } from '../../styles/homeStyles';

const HomeContent = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);
  return (
    <HomeContentSection
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Content>
          Welcome to our website. We are Cloud Engineering from{' '}
          <a href="https://seal.or.id/" target="_blank" rel="noopener noreferrer">
            AWS Seal. 
          </a>
          {' '}Feel free to explore our website.
        </Content>
      </Container>
    </HomeContentSection>
  );
};

export default HomeContent;
