/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTasks } from '../api_calls/get-tasks';
import style from './taskPage.module.css';
import { useEffect, useState } from 'react';

export const TaskPage = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [currentTask, setCurrentTask] = useState<any>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    try {
      getTasks().then(() => {
        setTasks(tasks);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const createTask = (value: any) => {
    try {
      createTask(value);
    } catch (e) {
      console.log(e);
    }
  };

  const completeTask = (value: any) => {
    try {
      completeTask(value);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTask = (value: any) => {
    try {
      deleteTask(value);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    // put functionality here
    createTask(currentTask);
  };

  return (
    <div className="nes-container">
      <div>To do List</div>
      <div>
        <a href="/">Home</a>
      </div>
      <div className={style.window}>
        <div className={style.main}>
          <div className={style.inputField}>
            <input
              onChange={(e) => setCurrentTask(e.target.value)}
              type="text"
              id="input-box"
              className="nes.nes-input"
            ></input>
            <button
              onClick={() => handleClick()}
              type="button"
              id="add"
              className="nes-btn is-primary"
            >
              <p>Add to List</p> <i className="nes-icon coin"></i>
            </button>
          </div>
          <img src="Koopa_Shell_Spin.webp" alt="" className={style.icon} />
          <div id="card-container">
            {tasks.map((x: any) => (
              <div className={style.icon + 'nes-container'}>
                <p>{x.task}</p>
                <span>
                  <img
                    src="Koopa_Shell_Spin.webp"
                    alt="delete"
                    className={style.icon}
                  />
                </span>
                <span>
                  <img
                    src="mushroom.png"
                    alt="complete"
                    className={style.icon}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
