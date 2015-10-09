import React from 'react';

import Home from './pages/Home.jsx';

import About from './pages/About.jsx';

import Design from './pages/Design.jsx';
import DesignPt1 from './pages/DesignPt1.jsx';
import DesignPt2 from './pages/DesignPt2.jsx';

import Code from './pages/Code.jsx';
import CodePt1 from './pages/CodePt1.jsx';
import CodePt2 from './pages/CodePt2.jsx';
import CodePt3 from './pages/CodePt3.jsx';

import Food from './pages/Food.jsx';
import FoodPt1 from './pages/FoodPt1.jsx';
import FoodPt2 from './pages/FoodPt2.jsx';

export const PAGE_SETS = {
  home: {
    iconClass: 'ion-earth',
    pages: [<Home />]
  },
  about: {
    iconClass: 'ion-happy-outline',
    pages: [<About />]
  },
  design: {
    iconClass: 'ion-ios-flower',
    pages: [<Design />, <DesignPt1 />, <DesignPt2 />]
  },
  code: {
    iconClass: 'ion-code-working',
    pages: [<Code />, <CodePt1 />, <CodePt2 />, <CodePt3 />]
  },
  food: {
    iconClass: 'ion-fork',
    pages: [<Food />, <FoodPt1 />, <FoodPt2 />]
  }
};
