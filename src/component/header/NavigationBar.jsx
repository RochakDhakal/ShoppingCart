import React, { useEffect, useState } from "react";
import {
  faClose,
  faShoppingCart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Menu } from "@mui/material";
import { Container, Nav, Navbar, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../../redux/action/action";

function NavigationBar() {
  const [price, setPrice] = useState(0);
  const getData = useSelector((state) => state.cartReducers.carts);
  // console.log(getData.length);
  const dispatch = useDispatch();
  const dlt = (id) => {
    dispatch(DLT(id));
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

  // Bootstrap
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light fs-3 mx-3">
            Shopping Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/cart"
              className="text-decoration-none text-light fs-3 mx-3">
              Cart
            </NavLink>
          </Nav>
          <Badge badgeContent={getData.length} color="primary">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-light fs-3"
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
          </Badge>
        </Container>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}>
          {getData.length ? (
            <div className="card_details">
              <Table>
                <thead>
                  <tr>
                    <td>Products</td>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to="/cart" onClick={handleClose}>
                              <img
                                src={e.img}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.title}</p>
                            <p>Price : {e.price}</p>
                            <p>Quantity : {e.quantity}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}>
                              <FontAwesomeIcon icon={faTrash} />
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total : {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="card_details">
              Cart is Empty
              <FontAwesomeIcon
                icon={faClose}
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
