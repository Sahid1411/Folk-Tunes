import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Admin.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

function GetSuppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/suppliers");
        setSuppliers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  const deleteSupplier = async (supplierId) => {
    await axios
      .delete(`http://localhost:4000/api/delete/supplier/${supplierId}`)
      .then((response) => {
        setSuppliers((prevSuppliers) =>
          prevSuppliers.filter((supplier) => supplier._id !== supplierId)
        );
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const adminId = localStorage.getItem("adminId")?.replace(/"/g, "");

  return (
    <>
      <div id="hideHeaderNavbar">
        <Header />
        <Navbar />
      </div>

      <div className="container supplier-container">
        <div className="row">
          <div className="col-12">
            <div className="supplier-card">
              <Link
                style={{ marginTop: "20px" }}
                className="btn btn-secondary back-button"
                to={`/admin/${adminId}`}
              >
                <i
                  style={{ marginRight: "4px" }}
                  className="fa-solid fa-backward"
                ></i>
                Back
              </Link>
              <h3 className="text-center">Registered Suppliers</h3>
              {suppliers.length === 0 ? (
                <div className="noData">
                  <h3>No Data to display</h3>
                  <p>Please add new suppliers</p>
                </div>
              ) : (
                <table className="table table-bordered supplier-table">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((supplier, index) => (
                      <tr key={supplier._id}>
                        <td>{index + 1}</td>
                        <td>{supplier.name}</td>
                        <td>{supplier.email}</td>
                        <td>{supplier.gender}</td>
                        <td>{supplier.phone}</td>
                        <td>{supplier.address}</td>
                        <td>
                          <button
                            onClick={() => deleteSupplier(supplier._id)}
                            className="btn btn-danger action-button"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetSuppliers;
