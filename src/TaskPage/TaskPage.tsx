/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import style from './taskPage.module.css';
import stomp from '../../public/smb_stomp.wav';
import oneUp from '../../public/smb_1-up.wav';
import pause from '../../public/smb_pause.wav';
import { completeTask } from '../api_calls/complete-task';
import { createTask } from '../api_calls/create-task';
import { deleteTask } from '../api_calls/delete-task';
import { getTasks } from '../api_calls/get-tasks';
import coinSound from '../../public/smb_coin.wav';
import Modal from 'react-modal';
declare module 'react-modal';
// import gameOver from '../../public/smb_gameover.wav'
// import gameOver from '../../public/smb_gameover.wav'
// import gameOver from '../../public/smb_mariodie.wav';
// import backgroundMusic from '../../public/underworld.mp3';

const TaskPage = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [currentTask, setCurrentTask] = useState<any>([]);
  // const [isCompleted, setIsCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const createT = async (task: any) => {
    try {
      await createTask(task);
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
        setTasks(
          tasks.map((task: any) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
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

  const clearAll = async () => {
    try {
      tasks.map((task: any) => {
        deleteTask(task.id);
      });
      const audio = new Audio(gameOver);
      audio.play();
      setTasks([]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleTaskAdd = async () => {
    // put functionality here
    if (!currentTask.trim() || (!currentTask.trim() && tasks.length == 0)) {
      setIsModalOpen(true);
      const audio = new Audio(pause);
      audio.play();
      return;
    }
    const audio = new Audio(coinSound);
    audio.play();
    await createT(currentTask);
    await fetchTasks();
  };

  const returnMouseOver = (e: any) => {
    e.target.innerText = `WHERE DO YOU THINK YOU'RE GOING?`;
  };

  const returnMouseOut = (e: any) => {
    e.target.innerText = `Home`;
  };

  return (
    <>
      <div className={`${style.taskPageBackground}`}></div>

      <div
        className={`${style.backgroundColorWhite} ${style.widthFit} nes-container with-title`}
      >
        <h2 className={`${style.title} title`}>Memento Mori</h2>
        <p>Enter a task</p>

        <div>
          <a onMouseOver={returnMouseOver} onMouseOut={returnMouseOut} href="/">
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
                className={`${style.flexRow} ${style.maxWidthOut} nes-btn is-primary`}
              >
                <span>Add</span>
                <i className="nes-icon coin"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="card-container"
        className={`${style.widthFit} ${style.cardContainer}`}
      >
        {tasks.map((x: any) => (
          <div
            className={`${
              x.completed
                ? style.backgroundColorYellow
                : style.backgroundColorWhite
            } ${style.icon} nes-container ${style.flexRow}`}
          >
            <div className={`${style.widthFit}`}>
              <p className={`${style.breakWord}`}>{x.task}</p>
            </div>

            <div className={`${style.gap5}`}>
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
          </div>
        ))}
      </div>
      <button
        className={`${style.clearButton} nes-btn is-error`}
        onClick={() => clearAll()}
      >
        Clear All
      </button>
      <Modal
        className={`${style.modal}`}
        style={{ overlay: { backgroundColor: 'transparent' } }}
        isOpen={isModalOpen}
      >
        <div className={`${style.modalPanel}`}>
          <div className={`${style.inside}`}>
            <h2>I know you have a lot to do</h2>
            <button onClick={() => setIsModalOpen(false)}>stfu</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TaskPage;
