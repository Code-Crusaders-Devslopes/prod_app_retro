/* eslint-disable @typescript-eslint/no-explicit-any */
import style from './taskPage.module.css'
import {useState} from 'react';

const TaskPage = () => {

  const [tasks, setTasks] = useState<any>([{
    id: 1,
    task: "string",
    complete: true
  },
  {
    id: 2,
    task: "string2",
    complete: false
  }
]);
  const [input, setInput] = useState<any>([]);

  const handleClick = () =>{
    // put functionality here
  }

  return (
    <>
          <div className="nes-container">
          <div>To do List</div>
          <div><a href="/">Home</a></div>
          <div className={style.window}>
            <div className={style.main}>
              <div className={style.inputField}>
                <input onChange={(e) => setInput(e.target.value)} type="text" id="input-box" className='nes.nes-input'></input>
                <button onClick={() => handleClick()} type="button" id="add" className='nes-btn is-primary'>
                  <p>Add to List</p> <i className='nes-icon coin'></i>
                </button>
              </div>
              <img src="Koopa_Shell_Spin.webp" alt="" className={style.icon} />
              <div id="card-container">
                {tasks.map((x:any) =>
                  <div className={style.icon + 'nes-container'}>
                    <p>{x.task}</p>
                    <span><img src="Koopa_Shell_Spin.webp" alt="delete" className={style.icon}/></span>
                    <span><img src="mushroom.png" alt="complete" className={style.icon}/></span>
                  </div>
                  )}
              </div>
            </div>
          </div>
          </div>

    </>
  );
};

export default TaskPage;