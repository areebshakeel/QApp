import React, { useEffect } from "react";
import { Row, Col } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "../../assets/student.png";
import Footer from "../../components/footer";
import Button from "../../components/button";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase";
import 'firebase/firestore';
import {getCompaniesList} from '../../config/firebase'

function AddStudent() {

   useEffect(function(){

      getData()


   },[])

   const getData= async function (){
      
      try{
         await getCompaniesList()         
         alert('chall giaa')
      }
      catch(error){
         alert(error.message)

      }
      
   }
  const allCompanies = [
    {
      name: "factualCode",
      type: "software",
      number: "03007044599",
      timing: "09:00 AM",
      actions: "factual",
    },
    {
      name: "Koder Labs",
      type: "software",
      number: "03007044599",
      timing: "09:00 AM",
      actions: "factual",
    },
  ];

  const history = useHistory();

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
            <input className="form-control" type="text" />
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td></td>
            </tr>
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
