/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import style from './taskPage.module.css';
import stomp from '../../public/smb_stomp.wav'
import gameOver from '../../public/smb_mariodie.wav';
import oneUp from '../../public/smb_1-up.wav';
import { completeTask } from '../api_calls/complete-task';
import { createTask } from '../api_calls/create-task';
import { deleteTask } from '../api_calls/delete-task';
import { getTasks } from '../api_calls/get-tasks';
// import gameOver from '../../public/smb_gameover.wav'
import coinSound from '../../public/smb_coin.wav';
import { useEffect, useState } from 'react';

const TaskPage = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [currentTask, setCurrentTask] = useState<any>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      await getTasks().then((data) => {
        setTasks(data);
        console.log(tasks);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const createT = async (value: any) => {
    try {
      await createTask(value);
    } catch (e) {
      console.log(e);
    }
  };

  const completeT = async (id: any) => {
    try {
      const taskToComplete = tasks.find((task: any) => task.id === id);
      if (taskToComplete) {
        await completeTask(id);
        const audio = new Audio(oneUp);
        audio.play();
        setTasks(tasks.map((task: any) => task.id === id ? { ...task, completed: !task.completed } : task));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteT = async (value: any) => {
    try {
      deleteTask(value);
      const audio = new Audio(stomp);
      audio.play();
      setTasks(tasks.filter((task: any) => task.id !== value));
    } catch (e) {
      console.log(e);
    }
  };

  const handleTaskAdd = async () => {
    // put functionality here
    const audio = new Audio(coinSound);
    audio.play();
    await createT(currentTask);
    await fetchTasks();
  };

  const mouseOver = (e) => {
    e.target.innerText = `WHERE DO YOU THINK YOU'RE GOING?`;
  };

  const mouseOut = (e) => {
    e.target.innerText = `Home`;
  };

  return (
    <>
      <div className={`${style.backgroundColorWhite} nes-container with-title`}>
        <h2 className={`${style.title} title`}>Memento Mori</h2>
        <p>Enter a task</p>
        <div>
          <a onMouseOver={mouseOver} onMouseOut={mouseOut} href="/">
            Home
          </a>
        </div>
        <div className={style.window}>
          <div className={style.main}>
            <div className={style.inputField}>
              <input
                onChange={(e) => setCurrentTask(e.target.value)}
                type="text"
                id="input-box"
                className={`${style.maxWidthOut} ${style.alignItems} nes.nes-input`}
              ></input>
              <button
                onClick={() => handleTaskAdd()}
                type="button"
                id="add"
                className={`${style.flexRow} ${style.justifyContent} nes-btn is-primary`}
              >
                <p>Add</p> <i className="nes-icon coin"></i>
              </button>
            </div>
            <img src="Koopa_Shell_Spin.webp" alt="" className={style.icon} />
            <div id="card-container">
              {tasks.map((x: any) => (
                <div
                  className={`${
                    x.completed ? style.backgroundColorYellow : style.backgroundColorWhite
                  } ${style.icon} nes-container`}
                >
                  <p>{x.task}</p>
                  <span>
                    <img
                      src="Koopa_Shell_Spin.webp"
                      alt="delete"
                      className={style.icon}
                      onClick={() => deleteT(x.id)}
                    />
                  </span>
                  <span>
                    <img
                      src="mushroom.png"
                      alt="complete"
                      className={style.icon}
                      onClick={() => completeT(x.id)}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskPage;
