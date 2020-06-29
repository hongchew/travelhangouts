import React from 'react';
import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import logo from './logo-transparent.png'
import jumbotronBg from './Solo-2.jpg'
import userFlow from './user-flow.png'
import safety from './safety.png'
import value from './value.png'

function App() {
  return (
    <div className="App">
      <Navbar fixed='top' bg="dark" variant="dark">
        <Navbar.Brand href="#top"><Image src={logo} height="35px"/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#about">About us</Nav.Link>
          <Nav.Link href="#why">Why us</Nav.Link>
          <Nav.Link href="#safety">Safety</Nav.Link>
          <Nav.Link href="#giveaway">Giveaway</Nav.Link>
          <Nav.Link href="#top">Register Now!</Nav.Link>
        </Nav>
      </Navbar>
      <Jumbotron fluid id="top" style={{backgroundImage: `url(${jumbotronBg})` , backgroundSize:'cover', height:'900px' }}>
        <Container className="jumbotron-text-container">
          <Image src={logo} width="300px"/><br/><br/>
          <h1>Travel Solo Together</h1>
          <p className="jumbotron-subheadings">Find other solo travelers to hang out without pre-planning.</p>
          <p className="jumbotron-subheadings">Wherever you are, whenever you want.</p>
          <br/>
          <div className="jumbotron-register">
            <p>Register for our waitlist for early access to TravelHangouts and news about our updates and releases!</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter your email!"
                aria-label="Enter your email!"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="success">Register</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
         </Container>
      </Jumbotron>
      <Jumbotron className="jumbotron-insert">
        For solo travelers by solo travelers
      </Jumbotron>
      <Container id="about" className="content-container">
        <h2>About TravelHangouts</h2>
        <p>TravelHangouts is founded by solo travelers for solo travelers!</p>
        <p>
          Solo traveling gets lonely sometimes and we just want a quick hangout with someone now and then, but it is difficult to find people willing and able to especially in a foreign land where language and culture might be an issue.
          Maybe we just need someone for a quick lunch, or to casually tour an area with, but we do not want to go through the trouble of finding people in advance and plan our schedules around a simple meetup.
        </p>
        <p>
          And thus, we came up with a simple solution for this problem - TravelHangouts!
          <br/>
          TravelHangouts connects solo travelers from all over the world to let you meet up and hang out with other solo travelers that are craving just a little social interaction like you. 
        </p>
        <p>
          Using TravelHangouts is easy and intuitive, no need for troublesome scheduling and pre-planning: <br/><br/>
          <Image src={userFlow} fluid />
        </p>
        <p>
          <br/>
          We hope to create a world where people can travel without being tied down while having access to a great community of globetrotters to hang out with if so desired. 
        </p>
      </Container>
      <Jumbotron className="jumbotron-insert">
        On-demand, No Hassle, No Commitment
      </Jumbotron>
      <Container id="why" className="content-container">
        <h2>Why TravelHangouts</h2>
        <p>
          TravelHangouts is designed to maintain as much freedom and autonomy as possible for the solo traveler while still allowing them to meet with others to scratch that social itch.
        </p>
        <p>
          <Image src={value} fluid />
        </p>
        <p>
          By designing the app around on-demand, location based hangouts, we are able to bring solo travelers from all over together without sacrificing on the things that makes solo traveling appealing to us.
        </p>
      </Container>
      <Jumbotron className="jumbotron-insert">
        Safety is our priority
      </Jumbotron>
      <Container id="safety" className="content-container">
        <h2>Safety</h2>
        <p>
          We understand that safety is of utmost importance when it comes to meeting with others, hence we took time to come up with a set of features that helps to make TravelHangouts a safer space for all.
        </p>
        <p>
          <Image src={safety} fluid />
        </p>
        <p>
          With simple and intuitive safety features, we can keep the platform safe and ensure that you meet only people you are comfortable with!
        </p>
      </Container>
      <Jumbotron className="jumbotron-insert">
        Hangout with only people you are comfortable with
      </Jumbotron>
      <Container id="giveaway" className="content-container">
        <h2>Giveaways</h2>
        <p>
          Join our various giveaway campaigns on social media to stand a chance to win a trip to your dream destination!
        </p>
        <p>
          Simply pre-register with us and tell us about why you love solo traveling and more about your dream solo traveling destination on various social media!
        </p>
        <p>
          Find us on social media here!
        </p>
        <div className="social">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
        </div>
      </Container>
      <Jumbotron className="jumbotron-insert">
        Pre-register now for a safe <br/>and intuitive way to hangout while traveling! 
        <Container>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter your email!"
              aria-label="Enter your email!"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="success">Register</Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
      </Jumbotron>
      <footer>
        Disclaimer : This website is created as a mock landing page for National University of Singapore's NUS Overseas College New Venture Creation Module<br/>
        This is a student project and is not an actual commercial product.
      </footer>
    </div>
  );
}

export default App;
