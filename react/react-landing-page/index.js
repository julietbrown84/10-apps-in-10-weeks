import React from 'react'
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
class App extends React.Component {
       render() {
         return (
         	<LandingPage/>

           // <div className="section-a">
           //   <Container>
           //     <Row>
           //       <Col lg={6}>
           //         1/2 grid here!
           //       </Col>
           //       <Col lg={6}>
           //         1/2 grid here!
           //       </Col>
           //     </Row>
           //   </Container>
           // </div>
        )
    }
}



ReactDOM.render(
     <App/>,
     document.getElementById('app')     
);
