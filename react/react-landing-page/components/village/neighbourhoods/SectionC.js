 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';
 
 import ImageBanner from './blocks/houses/ImageBanner.js';


 class SectionC extends React.Component {
 	render() {
	 	return (
	  		<section className="section-c">
	         <Container>
	              	<Row>
	              	// note overlay image with colour theme of website
                    <Col sm={4}>
                        <div className="">
                        	<h1>title</h1>
                        	<img src='http://placekitten.com/g/200/400' class="w3-circle" />    
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjftest blah
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf
                        </div>
                      </Col>

                      <Col sm={4}>
                        <div className="">
                        	<h1>title</h1>
                        	<img src='http://placekitten.com/g/200/400' class="w3-circle" />    
                         	  test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjftest blah
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf
                        </div>
                      </Col>

                      <Col sm={4}>
                        <div className="r"> 
                        	<h1>title</h1>
                        		<img src='http://placekitten.com/g/200/400' class="w3-circle" />              
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjftest blah
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf
                              test blah blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf blajsdlkfjsdlkjfldsk
                              sdfjdsklfjldskjfklsdjf

                        </div>
                      </Col>
	          		</Row>
          		</Container>
	      
	        </section>
        )
    }
}

module.exports = SectionC;