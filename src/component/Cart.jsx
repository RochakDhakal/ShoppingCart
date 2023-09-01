import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DLT, REMOVE } from "../redux/action/action";
import { useNavigate } from "react-router";
import NavigationBar from "./Header/NavigationBar";

function Cart() {
  const [price, setPrice] = useState(0);
  const getData = useSelector((state) => state.cartReducers.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const send = (items) => {
    dispatch(ADD(items));
  };
  const remove = (items) => {
    dispatch(REMOVE(items));
  };
  const removeAll = (id) => {
    dispatch(DLT(id));
    navigate("/");
  };
  const total = () => {
    let price = 0;
    getData.map((ele, k) => {
      price = ele.price * ele.quantity + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div>
      <NavigationBar/>
      <div className="d-flex flex-direction-column justify-content-evenly m-5">
        {getData?.map((item, ind) => {
          console.log(item.quantity);
          return (
            <Card style={{ width: "18rem" }} className="">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  {item.title}
                </Card.Title>
                <Card.Text className="d-flex justify-content-center">
                  <Button
                    className="m-2 col-5 bg-danger"
                    onClick={() => {
                      item.quantity > 1 ? remove(item) : removeAll(item.id);
                    }}>
                    Delete
                  </Button>
                  <span className="d-flex align-items-center">
                    {item.quantity}
                  </span>
                  <button
                    className="m-2 p-2 col-5 bg-success text-white rounded"
                    onClick={() => {
                      send(item);
                    }}>
                    Add
                  </button>
                </Card.Text>
                <Button
                  className="text-light bg-danger col-12 text-center"
                  onClick={() => removeAll(item.id)}>
                  Remove All
                </Button>
              </Card.Body>
              <ListGroup className="list-group-flush d-flex justify-content-center align-items-center">
                <ListGroup.Item>Price : $ {item.price}</ListGroup.Item>
                <ListGroup.Item>Quantity : {item.quantity}</ListGroup.Item>
                <ListGroup.Item>
                  Item Total : {item.price * item.quantity}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
      </div>
      <div className="d-flex justify-content-center fs-2">Grand Total :{price}</div>
    </div>
  );
}

export default Cart;
