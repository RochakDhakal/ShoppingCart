import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { productData } from "./productDeatils";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/action/action";
function Home() {
  const [data, setData] = useState(productData);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };
  return (
    <div className="container">
      <h2 className="text-center">Add Items</h2>
      <div className="row m-2">
        {data.map((item, ind) => {
          return (
            <Card
              style={{ width: "18rem" }}
              key={item.id}
              className="m-2 d-flex justify-content-center align-items-center card_style">
              <Card.Img
                variant="top"
                src={item.img}
                style={{ height: "16rem" }}
              />
              <Card.Body className="">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price : ${item.price}</Card.Text>
              </Card.Body>
              <div className="button_div">
                <Button
                  variant="primary"
                  className="m-2 col-lg-12"
                  onClick={() => send(item)}>
                  Add +
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
