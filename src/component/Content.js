import React, { useState } from "react";
import './Cart.css';

const Content  = (props) =>{
    // const [total,setTotal] = useState(0);
    // const [coldDrink,set1] = useState(0);
    // const [noodles,set2] = useState(0);
    // const [pasta,set3] = useState(0);
    // const [cheesePizza,set4] = useState(0);
    // const [paneerBurger,set5] = useState(0);

    const handleSubmitColdDrink = (event) => {
        event.preventDefault();
        console.log(event.target.coldDrink.value);
        // setTotal(total+parseInt(event.target.coldDrink.value));
        // set1(coldDrink+event.target.coldDrink.value);
        props.setT(event.target.coldDrink.value);
        props.setcoldDrink(event.target.coldDrink.value);
    }

    const handleSubmitNoodles = (event) => {
        event.preventDefault();
        console.log(event.target.Noodles.value);
        // setTotal(total+parseInt(event.target.Noodles.value));
        // set2(noodles+event.target.noodles.value);
        props.setT(event.target.Noodles.value);
        props.setN(event.target.Noodles.value);
    }

    const handleSubmitPasta = (event) => {
        event.preventDefault();
        console.log(event.target.Pasta.value);
        // setTotal(total+parseInt(event.target.Pasta.value));
        // set3(pasta+event.target.pasta.value);
        props.setT(event.target.Pasta.value);
        props.setP(event.target.Pasta.value);
    }

    const handleSubmitCheesePizza = (event) => {
        event.preventDefault();
        console.log(event.target.cheesePizza.value);
        // setTotal(total+parseInt(event.target.cheesePizza.value));
        // set4(cheesePizza+event.target.cheesePizza.value);
        props.setT(event.target.cheesePizza.value);
        props.setCP(event.target.cheesePizza.value);
    }

    const handleSubmitPaneerBurger = (event) => {
        event.preventDefault();
        console.log(event.target.paneerBurger.value);
        // setTotal(total+parseInt(event.target.paneerBurger.value));
        // set5(paneerBurger+event.target.paneerBurger.value);
        props.setT(event.target.paneerBurger.value);
        props.setPB(event.target.paneerBurger.value);
    }
    return(
        <>
            <div className='content1'>
                <div className='listitems'>

                    <div className='pr1'>
                        <h2 className='large'>Cold Drink</h2>
                        <p className='small'>Cold Drink</p>
                        <h3 className='number'>₹12</h3>
                    </div>
                    <div className='pr2'></div>
                    <div className='pr3'>
                        <form onSubmit={handleSubmitColdDrink}>
                            <label>

                                Amount: &nbsp;
                            </label>
                            <input type = "number" name="coldDrink" max={5} min={1} required placeholder="Amount"/>
                            <br/>
                            <button type="submit" className='btn'>Add</button>
                        </form>

                    </div>
                </div>

                <div className='listitems'>
                    <div className='pr1'>
                        <h2 className='large'>Noodles</h2>
                        <p className='small'>Noodles</p>
                        <h2 className='number'>₹20</h2>
                    </div>
                    <div className='pr2'></div>
                    <div className='pr3'>
                        <form onSubmit={handleSubmitNoodles}>
                            <label>

                                Amount: &nbsp;
                            </label>
                            <input type = "number" name="Noodles" max={5} min={1} required placeholder="Amount"/>
                            <br/>
                            <button className='btn'>Add</button>
                        </form>

                    </div>
                </div>

                <div className='listitems'>
                    <div className='pr1'>
                        <h2 className='large'>Pasta</h2>
                        <p className='small'>Pasta</p>
                        <h2 className='number'>₹15</h2>
                    </div>
                    <div className='pr2'></div>
                    <div className='pr3'>
                        <form onSubmit={handleSubmitPasta}>
                            <label>

                                Amount: &nbsp;
                            </label>
                            <input type = "number" name="Pasta" max={5} min={1} required placeholder="Amount"/>
                            <br/>
                            <button className='btn'>Add</button>
                        </form>

                    </div>
                </div>

                <div className='listitems'>
                    <div className='pr1'>
                        <h2 className='large'>Cheese Pizza</h2>
                        <p className='small'>Cheese Pizza</p>
                        <h2 className='number'>₹22</h2>
                    </div>
                    <div className='pr2'></div>
                    <div className='pr3'>
                        <form onSubmit={handleSubmitCheesePizza}>
                            <label>

                                Amount: &nbsp;
                            </label>
                            <input type = "number" name="cheesePizza" max={5} min={1} required placeholder="Amount"/>
                            <br/>
                            <button className='btn'>Add</button>
                        </form>

                    </div>
                </div>

                <div className='listitems'>
                    <div className='pr1'>
                        <h2 className='large'>Paneer Burger</h2>
                        <p className='small'>Paneer Burger</p>
                        <h2 className='number'>₹17</h2>
                    </div>
                    <div className='pr2'></div>
                    <div className='pr3'>
                        <form onSubmit={handleSubmitPaneerBurger}>
                            <label>

                                Amount: &nbsp;
                            </label>
                            <input type = "number" name="paneerBurger" max={5} min={1} required placeholder="Amount"/>
                            <br/>
                            <button className='btn'>Add</button>
                        </form>

                    </div>
                </div>


            </div>

            
        </>
    )
}

export default Content