import React from 'react';
import '../../style/HomeBanner.css';
import ButtonLearnMore from '../../style/ButtonLearnMore';

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <p>
        Pour chaque cadeau acheté, vous faites également une bonne action !
        <br /> Le programme Give You Love soutient l&apos;éducation des
        orphelins et enfants défavorisés dans le monde.
      </p>
      <ButtonLearnMore />
    </div>
  );
};

export default HomeBanner;
