import React from "react";
import Images from "./Images";
import main from "../../Images/MainImage.png";
import "./style.css";
import { Row, Col, Button, UncontrolledCarousel } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {
  return (
    <div>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: "5%",
        }}
      >
        <Col sm="6">
          <h1 style={{ color: "#727dbd", fontWeight: "bolder" }}>
            Lorem Ipsum Text
          </h1>
          <p
            style={{
              borderLeft: "4px solid #727dbd",
              padding: "2%",
              color: "black",
            }}
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blandit praesentium voluptatum delis atque corrupti quos dolores
          </p>
          <Button
            style={{
              width: "200px",
              height: "50px",
              backgroundColor: "#727dbd",
              color: "white",
              border: "none",
            }}
          >
            Get Started
          </Button>
          <br />
        </Col>
        <Col sm="6">
          <br />
          <img src={main} alt="MainImage" style={{ width: "100%" }} />
        </Col>
      </Row>
      <Carousel responsive={responsive} style={{backgroundColor:"#7882bd"}}>
        <div style={{backgroundColor:"#7882bd", alignItems:"center", textAlign:"center", padding:"5%", color:"white"}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blandit<br/> praesentium voluptatum delis atque corrupti quos dolores et quas</div>
        <div style={{backgroundColor:"#7882bd", alignItems:"center", textAlign:"center", padding:"5%", color:"white"}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blandit<br/> praesentium voluptatum delis atque corrupti quos dolores et quas</div>
        <div style={{backgroundColor:"#7882bd", alignItems:"center", textAlign:"center", padding:"5%", color:"white"}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blandit<br/> praesentium voluptatum delis atque corrupti quos dolores et quas</div>
        <div style={{backgroundColor:"#7882bd", alignItems:"center", textAlign:"center", padding:"5%", color:"white"}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blandit<br/> praesentium voluptatum delis atque corrupti quos dolores et quas</div>
      </Carousel>
    </div>
  );
}
