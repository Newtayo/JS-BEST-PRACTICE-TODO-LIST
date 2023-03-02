import { updatingstorage } from './task.js';
import sortOutput from './sort.js';

const clearButton = () => {
  const removeCompleted = document.querySelector('.reset');
  removeCompleted.addEventListener('click', () => {
    const taskstatus = document.querySelectorAll('.taskstatus');
    taskstatus.forEach((task) => {
      if (task.checked) {
        task.parentNode.remove();
      }
    });

    const afterClear = sortOutput();
    const filtered = afterClear.filter((elem) => elem.completed !== true);
   
    let i = 0;
    filtered.forEach((filt) =>{
      filt.index = i + "";

      i++
    })

    updatingstorage(filtered);
  });
};
export default clearButton;