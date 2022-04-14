import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import './Cart.css';
import { Modal, Badge} from "react-bootstrap";
import React, { useState } from "react";

const Cart = (props) =>{
    const [show, setShow] = useState(false);
    const [order, setOrder] = useState(false);

    const handleOrder = () => setOrder(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setOrder(false);
    
    };

    return(
                <div className='shopping'>


                <div className="try1">Food Order</div>
                <div className="try2">
                <Button  onClick={handleShow} variant="contained" startIcon={<ShoppingCartIcon />}>Cart
                &nbsp;
                <Badge pill bg="danger">{props.totalVal}</Badge>
                 </Button>

                    <Modal show={show} size={"lg"} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Cart Items</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> 
                            {
                                props.totalVal==0
                            ? 
                            <h2>No items availabel!</h2>
                            :
                            <div style={{display:"table", borderCollapse:"collapse"}}>
                            
                                {props.coldDrinkVal!=0
                                ?
                                <div className='listitems'>
                                    <div className='pr1'>
                                        <h2 className='large'>Cold Drink</h2>
                                        <p className='small'>Cold Drink</p>
                                        <h3 className='number'>₹12</h3>
                                    </div>
                                    <div className='pr2' style={{width:"450px", textAlign:"center"}}>Qty [ x {props.coldDrinkVal} ]</div>
                                    <div className='pr3'>
                                    <div style={{display:"flex"}}>

                                    <Button color="success" onClick={()=>(props.incCD())} variant="contained" > + </Button>
                                    &nbsp;
                                    <Button color="error" onClick={()=>(props.decCD())} variant="contained" > - </Button>
                                     </div>
                                    </div>

                                </div>
                                :
                                ""
                                }
                                {props.noodlesVal!=0
                                ?
                                <div className='listitems'>
                                    <div className='pr1'>
                                        <h2 className='large'>Noodles</h2>
                                        <p className='small'>Noodles</p>
                                        <h3 className='number'>₹20</h3>
                                    </div>
                                    <div className='pr2' style={{width:"450px", textAlign:"center"}}>Qty [ x {props.noodlesVal} ]</div>
                                    <div className='pr3'>
                                    <div style={{display:"flex"}}>

                                    <Button color="success" onClick={()=>(props.incN())} variant="contained" > + </Button>
                                    &nbsp;
                                    <Button color="error" onClick={()=>(props.decN())} variant="contained" > - </Button>
                                     </div>
                                    </div>

                                </div>
                                :
                                ""
                                }
                                {props.pastaVal!=0
                                ?
                                <div className='listitems'>
                                    <div className='pr1'>
                                        <h2 className='large'>Pasta</h2>
                                        <p className='small'>Pasta</p>
                                        <h3 className='number'>₹15</h3>
                                    </div>
                                    <div className='pr2' style={{width:"450px", textAlign:"center"}}>Qty [ x {props.pastaVal} ]</div>
                                    <div className='pr3'>
                                    <div style={{display:"flex"}}>

                                    <Button color="success" onClick={()=>(props.incP())} variant="contained" > + </Button>
                                    &nbsp;
                                    <Button color="error" onClick={()=>(props.decP())} variant="contained" > - </Button>
                                     </div>
                                    </div>

                                </div>
                                :
                                ""
                                }
                                {props.cheesePizzaVal!=0
                                ?
                                <div className='listitems'>
                                    <div className='pr1'>
                                        <h2 className='large'>Cheese Pizza</h2>
                                        <p className='small'>Cheese Pizza</p>
                                        <h3 className='number'>₹22</h3>
                                    </div>
                                    <div className='pr2' style={{width:"450px", textAlign:"center"}}>Qty [ x {props.cheesePizzaVal} ]</div>
                                    <div className='pr3'>
                                    <div style={{display:"flex"}}>

                                    <Button color="success" onClick={()=>(props.incCP())} variant="contained" > + </Button>
                                    &nbsp;
                                    <Button color="error" onClick={()=>(props.decCP())} variant="contained" > - </Button>
                                     </div>
                                    </div>

                                </div>
                                :
                                ""
                                }
                                {props.paneerBurgerVal!=0
                                ?
                                <div className='listitems'>
                                    <div className='pr1'>
                                        <h2 className='large'>Paneer Burger</h2>
                                        <p className='small'>Paneer Burger</p>
                                        <h3 className='number'>₹17</h3>
                                    </div>
                                    <div className='pr2' style={{width:"450px", textAlign:"center"}}>Qty [ x {props.paneerBurgerVal} ]</div>
                                    <div className='pr3'>
                                    <div style={{display:"flex"}}>

                                    <Button color="success" onClick={()=>(props.incPB())} variant="contained" > + </Button>
                                    &nbsp;
                                    <Button color="error" onClick={()=>(props.decPB())} variant="contained" > - </Button>
                                     </div>
                                    </div>

                                </div>
                                :
                                ""
                                }

                            </div>
                            }

                            {
                                order ?
                            <form>
                            <br/>
                            <h3>Order Confirmation</h3>
                            <label>
                            Name:

                            </label>
                            <input type = "text"  required placeholder="name"/>
                            <br/>
                            <label>
                                Address
                            </label>
                            <input type = "text"  required placeholder="Address"/>
                            <br/>
                            <label>
                                Pincode:
                            </label>
                            <input type = "number"  required placeholder="Pincode"/>
                            <br/>
                            <label>
                                Mobile No:
                            </label>
                            <input type = "number"  required placeholder="mob no."/>
                               
                        </form>
                            :
                            ""
                            }

                            <br/>



                            <h2 style={{float:"right"}}>Total Amount: 
                            &nbsp;
                             ₹

                            {props.coldDrinkVal*12 + props.noodlesVal*20 + props.pastaVal*15 + props.cheesePizzaVal*22 + props.paneerBurgerVal*17}
                                </h2>

                                </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose} style={{width:"150px", borderRadius:"5px", margin:"10px", padding:"10px", backgroundColor:"whitesmoke"}}>
                                Close
                                </Button>
                                <Button variant="primary" onClick={handleOrder} style={{width:"150px", borderRadius:"5px", margin:"10px", padding:"10px", backgroundColor:"rgb(13, 202, 240)"}}>
                                
                                {
                                    order?
                                    "Confirm"
                                    :
                                    "Order"
                                }
                                </Button>
                            </Modal.Footer>
                            </Modal>
                 

                </div>
                </div>
    )
}

export default Cart