import './assets/css/style.min.css';

import diaspora from './assets/img/diaspora.png';
import feebs from './assets/img/feebs.png';
import kalulu from './assets/img/kalulu.png';
import kaluluAndroid from './assets/img/kaluluAndroid.png';
import kudu from './assets/img/kudu.png';
import profile from './assets/img/pp.jpg';

import './assets/js/scripts';

export const g = (id) => document.getElementById(id);

g('diaspora').src = diaspora;
g('feebs').src = feebs;
g('kalulu').src = kalulu;
g('kaluluAndroid').src = kaluluAndroid;
g('kudu').src = kudu;

g('profile').src = profile;
