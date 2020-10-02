import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "../../assets/student.png";
import Footer from "../../components/footer";
import Button from "../../components/button";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase";
import "firebase/firestore";
import { getCompaniesList } from "../../config/firebase";

function AddStudent() {
  const [response1, setResponse] = useState([]);
  const [searchVar, setSearchVar] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  useEffect(function () {
    let response = getData();
  }, []);

  const getData = async function () {
    try {
      let response = await getCompaniesList();
      await setResponse(response);
      console.log("reposnce", response);
    } catch (error) {
      alert(error.message);
    }
  };
  const searchData = function (e) {
    console.log(e.target.value);

    let searchCompanies = response1.filter((search) => {
      console.log(search);
      setIsSearch(true)
      return search.companyName.includes(e.target.value) == true;
    });
    setSearchVar(searchCompanies);
    console.log(searchCompanies);
  };

  const history = useHistory();
  console.log(response1);
  return (
    <>
      <Col style={{ backgroundColor: "rgb(180, 180, 177)" }}>
        {/* navbar starts */}
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "rgb(32, 46, 46)",
            height: "7rem",
          }}
        >
          <Col>
            <h1 style={{ color: "white" }}>All Companies List </h1>
          </Col>
          <Col>
            <a href="">
              {" "}
              <h2
                style={{ color: "white" }}
                onClick={() => history.push("/dashboard")}
              >
                Back
              </h2>{" "}
            </a>
          </Col>
        </Row>
        {/* navbar ends */}
        <br />
        <br />

        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col>
            <label>Type:</label>
          </Col>
          <Col>
            <select className="form-control">
              <option> Software </option>
              <option> Construction </option>
              <option> IT </option>
              <option> Pharma </option>
              <option> petroleum </option>
            </select>
          </Col>
          <Col>
            <Button text="filter" />
          </Col>

          <Col
            style={{
              marginLeft: "8rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              onChange={(e) => searchData(e)}
              placeholder="Search Compoanies"
              className="form-control"
              type="text"
            />
            <span style={{ marginLeft: "2rem" }}>
              <Button text="Search" />
            </span>
          </Col>
        </Row>

        <table className="table table-dark table-class">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company Name</th>
              <th scope="col">Company Type</th>
              <th scope="col">Company Number</th>
              <th scope="col">Open Timings</th>
            </tr>
          </thead>
          <tbody>
            {isSearch
              ? searchVar.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.companyName}</td>
                      <td>{item.companyType}</td>
                      <td>{item.companyNumber}</td>
                      <td>{item.companyTiming}</td>
                    </tr>
                  );
                })
              : response1.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.companyName}</td>
                      <td>{item.companyType}</td>
                      <td>{item.companyNumber}</td>
                      <td>{item.companyTiming}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>

        <br />
        <br />
        <br />
      </Col>

      <Footer />
    </>
  );
}

export default AddStudent;
