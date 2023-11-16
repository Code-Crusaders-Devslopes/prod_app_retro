import style from './taskPage.module.css'

const TaskPage = () => {
  return (

    // add javascript here
    
    

    <>
      <div>To do List</div>
      <div><a href="/">Home</a></div>
      <div className={style.window}>
        <div className={style.main}>
          <div className={style.inputField}>
            <input type="text" id="input-box" className='nes.nes-input'></input>
            <button type="button" id="add" className='nes-btn is-primary'>
              <p>Add to List</p> <i className='nes-icon coin'></i>
            </button>
          </div>
          <img src="Koopa_Shell_Spin.webp" alt="" className={style.icon} />
          <div id="card-container">
  
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskPage;