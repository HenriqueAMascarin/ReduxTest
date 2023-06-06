import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//novo metodo de importar as actions
import { increment, incrementAmount } from './assets/redux/newWay/features/counter/counter-slice';

// antigamente se importava o connect para o jeito oldSchool 
import { useDispatch } from 'react-redux/es/exports' // useSelector hook padrao pra ter o estado
//useDispatch hook para trocar o estado
import { useAppSelector } from './assets/redux/newWay/customHooks'; // hook customizavel do useSelector

// antigamente se passava os valores do connect ex map state to props para a função, assim ficava function App({ count, increment, incrementAmount })
function App() {

  // const count = useAppSelector((state) => state.counter.value); maneira sem o hook customizavel, que so tem a tipagem do estado como diferença
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleOnClick(){
    // increment(); versão antiga oldscholl
    // dispatch({type: 'counter/increment'}); maneira old new 
    dispatch(increment()); //jeito novo toolkit
  }

  function handleOnClickAmount(){
    // incrementAmount(5); versão antiga oldscholl
    // dispatch({type: 'counter/incrementAmount', payload: 5}); maneira old new
    dispatch(incrementAmount(5)); //jeito novo toolkit
  } 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>
          count is {count}
        </button>
        <button onClick={handleOnClickAmount}>
          Increment Amount
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;

// MANEIRA ANTIGA (OLDSCHOOL)
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.value,
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: 'counter/increment'}),
//     incrementAmount: (amount) => dispatch({type: 'counter/incrementAmount', payload: amount}),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
