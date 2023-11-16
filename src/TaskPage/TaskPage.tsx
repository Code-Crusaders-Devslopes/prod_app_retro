const TaskPage = () => {
  return (

    // add javascript here
    
    

    <>
      <div>To do List</div>
      <div><a href="/">Home</a></div>
      <div className='window'>
        <div className='main'>
          <div className='input-field'>
            <input type="text" id="input-box" className='nes-input'></input>
            <button type="button" id="add" className="nes-btn is-primary">
              <p>Add to List</p> <i className="nes-icon coin"></i>
            </button>
          </div>
          <img src="assets/img/Koopa_Shell_Spin.webp" alt="" className="icon" />
          <div id="card-container">
  
          </div>
        </div>
      </div>
      <script type="module" src="assets/js/data.js"></script>
      <script type="module" src="assets/js/main.js"></script>
    </>
  );
};

export default TaskPage;