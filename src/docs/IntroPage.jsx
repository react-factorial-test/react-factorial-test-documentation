
import React from 'react';
import autoBind from 'react-autobind';

import LineItem from '../exampleComponentsToTest/lineItem/LineItem';
import LineItemParam from '../exampleComponentsToTest/lineItem/LineItemParameters';

import Shape from '../exampleComponentsToTest/shapes/Shape';
import ShapeParamRaw from '../exampleComponentsToTest/shapes/ShapesParameters';
var shapeData = TestNameTool(ShapeParamRaw); // name each test after it's variable name.

import {TestNameTool} from 'react-factorial-test';
var paramData = TestNameTool(LineItemParam); // name each test after it's variable name.

import {ParameterDisplay} from 'react-factorial-test';
import {MultiTest} from 'react-factorial-test';

function cleanStoryBookScrollBar(){
  window.parent.document.getElementsByClassName("horizontal")[1].style['overflow'] = '';
}

// Non interactive component that multiplies and adds up to three numbers
export default class IntroPage extends React.Component {

  render()
  {
    return(
      <div className='roboFont' onLoad={cleanStoryBookScrollBar}>
    <center>
    <hr/>
          <h1 style={{ marginTop: '5px', marginBottom: '5px', }}>
        react-factorial-test
        </h1>
    <hr/>
    <img src='/icon1.png' style={{display:'inline-block',float:'left',width:'75px',verticalAlign:'top'}}/>
    <div style={{display:'inline-block'}}>
    <img src='/fact1.png'/><br/>
    <img src='/factorial.png'/>
    </div>
    <img src='/icon1.png' style={{ display:'inline-block',float: 'right',width:'75px',verticalAlign:'top' }}/>
    <br/>
    <hr/>
    </center>

    <h1>What is a "factorial" test?</h1>
    Imagine you need automated, visual tests for a react component that renders a playing card:<br/>
    You've got a rank:  ( A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2 ) and you've got a suite: ( ♠, ♥, ♦, ♣ )<br/>
    Using react-factorial-test you simply list the 13 elements of rank and the 4 elements of suite.  Then the tool generates a test render for all 52 possible playing cards.<br/>
    Mathematically, this is actually called an <a href='https://en.wikipedia.org/wiki/Cartesian_product#n-ary_Cartesian_product'>n-fold cartesian product</a>.  But 'factorial' seems to get the idea across more easily.
    
    <h1>How does it work?</h1>
    A factorial test encourages you to write a list of test values for each property on your component.<br/>
    Then it "multiplies" all of your parameters together.  This lets you compare different states without manually writing a specific story for each test.<br/>
    <br/>
    <div style={{ display: 'table',verticalAlign:'top' }}>
      <div style={{display:'table-row'}}>
        <div style={{ display: 'table-cell',  width: '20%' }}>
          You type this:
        </div>
        <div style={{ display: 'table-cell', width: '25%' }}>
          You get documents:
        </div>
        <div style={{ display: 'table-cell', width: '55%' }}>
        And test results:
        </div>
      </div>      
      <div style={{ display: 'table-row',maxHeight:'400px' }}>
        <div style={{ display: 'table-cell', border: '1px solid grey', padding: '10px', width: '20%', verticalAlign: 'top' }}>
          <img src='/simpleSample.png' style={{maxWidth:'250px'}}/>
        </div>
        <div style={{ display: 'table-cell', border: '1px solid grey', padding: '10px', width: '25%' }}>    
          <ParameterDisplay data={shapeData} name='Shape Parameters' description='Explore your test values here:' />
        </div>
          <div style={{ display: 'table-cell',position:'relative', border: '1px solid grey', width: '55%', verticalAlign: 'top', overflow: 'auto',padding:'5px' }}>    
              <MultiTest
                target={<Shape/>}
                id='IntroPage'
                smallMode={true}
                test={
                  [ [shapeData.colorTest, 
                     shapeData.shapeTest, 
                     shapeData.borderTest] ]}
              />
        </div>
      </div>        
    </div>
    <h1>GitHub</h1>
        You can find the github repo for the project here: <a href='https://github.com/react-factorial-test/react-factorial-test'>react-factorial-test</a>.<br />
        You can find the github repo for this sample website here: <a href='https://github.com/react-factorial-test/react-factorial-test-documentation'>react-factorial-test-documentation</a>.<br />
        <br/>
        After you clone <b>react-factorial-test-documentation</b> call <b>npm run storybook</b> to see this page and all the sample tests running locally.<br/>
        <br />
      <h1>Core Features</h1>
      
      <ul>
          <li>Rapid test generation based on parameter documentation.</li>
          <li>Tools for side-by-side comparison of test results.</li>
          <li>DRY test development: No need to repeat parameters when building tests.</li>
          <li><a href='https://storybook.js.org/'>Storybook</a> compatible</li>
        </ul>
    
    <br/>
    So if your component takes 3 parameters, and you want to test 3 values for each parameter you end up with 27 tests.<br/>
    All you need to do is list the parameter options you want to test for your component.  
            
    <h1>To see a more in-depth example, click "<a href='/?selectedKind=Introduction&selectedStory=Let%27s%20explore%20a%20sample&full=0&addons=0&stories=1&panelRight=0'>Let's explore a sample</a>" in the menu...</h1>

    </div>
    );
  }
}

