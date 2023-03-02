import { updatingstorage } from './task.js';

const bookremoval = (id, arr) => {
  const filtered = arr.filter((elem) => elem.index !== id);

  let i = 0;
  filtered.forEach((filt) => {
    filt.index = `${i}`;

    i += 1;
  });

  updatingstorage(filtered);
};

export default bookremoval;
