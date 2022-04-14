import Cart from "./component/Cart.js";
import Slider from "./component/Slider.js";
import Content from "./component/Content.js";
import './App.css';
import React, { useState } from "react";



function App() {

  const [total,setTotal] = useState(0);
  const [coldDrink,set1] = useState(0);
  const [noodles,set2] = useState(0);
  const [pasta,set3] = useState(0);
  const [cheesePizza,set4] = useState(0);
  const [paneerBurger,set5] = useState(0);

  const changeT=(val)=> setTotal(parseInt(val)+total);
  const changeCD=(val)=> set1(parseInt(val)+coldDrink);
  const changeN=(val)=> set2(parseInt(val)+noodles);
  const changeP=(val)=> set3(parseInt(val)+pasta);
  const changeCP=(val)=> set4(parseInt(val)+cheesePizza);
  const changePB=(val)=> set5(parseInt(val)+paneerBurger);

  const changedecT=()=> setTotal(total-1);
    const changedecCD=()=> {
        set1(coldDrink-1);
        changedecT();
    }
    const changedecN=()=> {
        set2(noodles-1);
        changedecT();
    }
    const changedecP=()=> {
        set3(pasta-1);
        changedecT();
    }
    const changedecCP=()=> {
        set4(cheesePizza-1);
        changedecT();
    }
    const changedecPB=()=> {
        set5(paneerBurger-1);
        changedecT();
    }


const changeincT=()=> setTotal(total+1);

    const changeincCD=()=> {
        set1(coldDrink+1);
        changeincT();
    }
    const changeincN=()=> {
        set2(noodles+1);
        changeincT();
    }
    const changeincP=()=> {
        set3(pasta+1);
        changeincT();
    }
    const changeincCP=()=> {
        set4(cheesePizza+1);
        changeincT();
    }
    const changeincPB=()=> {
        set5(paneerBurger+1);
        changeincT();
    }

  return (
    <div className="App">
     <Cart totalVal={total} coldDrinkVal={coldDrink} noodlesVal={noodles} pastaVal={pasta} cheesePizzaVal={cheesePizza} paneerBurgerVal={paneerBurger} 
      decT={changedecT} decCD={changedecCD} decN={changedecN} decP={changedecP} decCP={changedecCP} decPB={changedecPB}
      incT={changeincT} incCD={changeincCD} incN={changeincN} incP={changeincP} incCP={changeincCP} incPB={changeincPB}

      
     />
      

      <Slider/>
      <Content setT={changeT} setcoldDrink = {changeCD} setN={changeN} setP={changeP} setCP={changeCP} setPB={changePB}
      />
      <div className="upper">


      </div>
    
    </div>
  );
}

export default App;
