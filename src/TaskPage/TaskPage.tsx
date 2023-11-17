/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import style from './taskPage.module.css'
import stomp from '../../public/smb_stomp.wav'
import oneUp from '../../public/smb_1-up.wav'
        import { completeTask } from '../api_calls/complete-task';
import { createTask } from '../api_calls/create-task';
import { deleteTask } from '../api_calls/delete-task';
import { getTasks } from '../api_calls/get-tasks';
// import gameOver from '../../public/smb_gameover.wav'
import coinSound from '../../public/smb_coin.wav'
import {useEffect, useState} from 'react';

const TaskPage = () => {

  const [tasks, setTasks] = useState<any>([]);
  const [currentTask, setCurrentTask] = useState<any>([]);

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  const fetchTasks = () => {
    try {
      getTasks().then(() => {
        setTasks(tasks);
      });
    } catch (e) {
      console.log(e);
    }
  };


  const createT = async () => {
    try {
      await createTask(currentTask);
    } catch (e) {
      console.log(e);
    }
  };

  const completeT = (id: any) => {
    try {
      completeTask(id);
      const audio = new Audio(oneUp);
      audio.play();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteT = (value: any) => {
    try {
      deleteTask(value);
       const audio = new Audio(gameOver);
       audio.play();
    } catch (e) {
      console.log(e);
    }
  };

  const handleTaskAdd = () => {
    // put functionality here
      const audio = new Audio(coinSound);
    audio.play();
    createT();
    fetchTasks();
  
  };


  const mouseOver = (e) => {
    e.target.innerText = `WHERE DO YOU THINK YOU'RE GOING?`
  }

  const mouseOut = (e) => {
    e.target.innerText = `Home`
  }

  return (
    <>
        <div className={`${style.backgroundColorWhite} + nes-container`}>
          <div>To do List</div>
          <div><a onMouseOver={mouseOver} onMouseOut={mouseOut} href="/">Home</a></div>
          <div className={style.window}>
            <div className={style.main}>
              <div className={style.inputField}>
                <input onChange={(e) => setCurrentTask(e.target.value)} type="text" id="input-box" className={`${style.maxWidthOut} ${style.alignItems} nes.nes-input`}></input>
                <button onClick={() => handleTaskAdd()} type="button" id="add" className={`${style.flexRow} ${style.justifyContent} nes-btn is-primary`}>
                  <p>Add</p> <i className='nes-icon coin'></i>
                </button>
              </div>
              <img src="Koopa_Shell_Spin.webp" alt="" className={style.icon} />
              <div id="card-container">
                {tasks.map((x:any) =>
                  <div className={`${x.completed ? style.backgroundColorYellow : null} style.icon + 'nes-container'`}>
                    <p>{x.task}</p>
                    <span><img src="Koopa_Shell_Spin.webp" alt="delete" className={style.icon} onClick={()=> deleteTask()}/></span>
                    <span><img src="mushroom.png" alt="complete" className={style.icon} onClick={completeTask}/></span>
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
