import React from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavCart() {
  return (
    <div className="card_details" style={{ width: "24rem", padding: 10 }}>
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {getdata.map((e) => {
            return (
              <>
                <tr>
                  <td>
                    <NavLink onClick={handleClose}>
                      <img
                        src={e.imgdata}
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
                      style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                      onClick={() => dlt(e.id)}>
                      <i className="fas fa-trash smalltrash"></i>
                    </p>
                  </td>

                  <td
                    className="mt-5"
                    style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                    onClick={() => dlt(e.id)}>
                    <i className="fas fa-trash largetrash"></i>
                  </td>
                </tr>
              </>
            );
          })}
          <p className="text-center">Total : {price}</p>
        </tbody>
      </Table>
    </div>
  );
}

export default NavCart;
