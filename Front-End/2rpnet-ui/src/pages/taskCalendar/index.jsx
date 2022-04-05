// Componetizacoes
import Navbar from '../../components/menu/Navbar'
import Header from '../../components/header/header.js'

// CSS
import "../../assets/css/style.css"
import "../../assets/css/pages/taskCalendar.css"
import "../../assets/css/components/fonts.css"
import "../../assets/css/components/button.css"

function App() {

  return (

    <div className='pageTaskCalendar'>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <h3 className="pageTitle h3">Painel Organizacional</h3>
      <div className='taskCalendar'>
        <section className="task">
          <div className="toDo">
            <h5 className="taskTitle h5">A Fazer</h5>
            <div className="taskSpace">
              <p className="cardTask p">Lorem Ipsum is simply dummy text.</p>
            </div>
          </div>
          <div className="do">
            <h5 className="taskTitle h5">Fazendo</h5>  
            <div className="taskSpace">
              <p className="cardTask p">Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </div>
          <div className="done">
            <h5 className="taskTitle h5">Feito</h5>
            <div className="taskSpace">
              <p className="cardTask p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </section>
        <div className="calendarAndBtn">
          <section className="calendar">
            <input type="button"
            value="1" />
            <input type="button"
            value="2" />
            <input type="button"
            value="3" />
            <input type="button"
            value="4" />
            <input type="button"
            value="5" />
            <input type="button"
            value="6" />
            <input type="button"
            value="7" />
            <input type="button"
            value="8" />
            <input type="button"
            value="9" />
            <input type="button"
            value="10" />
            <input type="button"
            value="11" />
            <input type="button"
            value="12" />
            <input type="button"
            value="13" />
            <input type="button"
            value="14" />
            <input type="button"
            value="15" />
            <input type="button"
            value="16" />
            <input type="button"
            value="17" />
            <input type="button"
            value="18" />
            <input type="button"
            value="19" />
            <input type="button"
            value="20" />
            <input type="button"
            value="21" />
            <input type="button"
            value="22" />
            <input type="button"
            value="23" />
            <input type="button"
            value="24" />
            <input type="button"
            value="25" />
            <input type="button"
            value="26" />
            <input type="button"
            value="27" />
            <input type="button"
            value="28" />
            <input type="button"
            value="29" />
            <input type="button"
            value="30" />
            <input type="button"
            value="31" />
          </section>
          <input
            className="btnNewTask button"
            type="button"
            value="Nova Tarefa" />
        </div>
      </div>
    </div>

  );
}

export default App;
