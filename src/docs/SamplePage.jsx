
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

const HH2 = ({ children }) => (<h2 style={{ marginBottom: '2px', marginTop: '15px' }}>{children}</h2>);

// Non interactive component that multiplies and adds up to three numbers
export default class IntroPage extends React.Component {
  render()
  {
    return(
   <div>
    <HH2>Let's see an example:</HH2>
    Imagine you have a simple cost calculation component to be tested:<br/>
    <LineItem count={5} cost={15}/><br/>
    We also have some basic requirements about it:<br/>

    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
      Input Parameters:
      <ul>
        <li>Count Needed:</li>
        <li>Unit cost:</li>
        <li>Currency:</li>
        <li>Limit:</li>
      </ul>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'5px'}}>
      Display Behaviors:
      <ul>
        <li>Validation Message when count or cost are missing.</li>
        <li>Default to USD, but support EUR and GBP currencies.</li>
        <li>Display the count times the cost as a total.</li>
        <li>Show the total in red if it is over the limit.</li>
      </ul>
    </div>

    <HH2>Normal Storybook:</HH2>
    In normal Storybook, might write a set of stories that look like this:
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
      Storybook Code:<br/>
      <img src='/normalStorybookCode.png'/>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'5px'}}>
      Storybook Menu:<br/>
      <img src='/normalStorybookMenu.png'/>
    </div>
    This is pretty OK.  It's got some bad input testing, it exercises the general needs of the component.<br/>
    <br/>
    <HH2>But we can do better!</HH2>
    <ul>
    <li>What happens when you add many more parameters?</li>
    <li>What happens when you want to compare two states of the same componenet?</li>
    <li>When 'limit' is undefined, what is supposed to happen?</li>
    <li>What happens when you have many more parameters and hundreds of possible states to test?</li>
    <li>What happens when you get serious about bad input checking and all the tests that demands?</li>
    <li><i>How many times do you really want to repeat yourself about the name of the component and each parameter???</i></li>
    <li>Why did you do all this typing, but still have no documentation that a Biz Dev teammate can actually read?</li>
    </ul>

    <HH2>Let's Get Factorial:</HH2>
    The first key 'trick' of react-factorial-test is to document the parameter values we want to test.<br/>
    We use the suffix 'Test' to tell the system which objects are tests and which objects are parameters.<br/>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
    count:
      <ul>
        <li>null</li>
        <li>0</li>
        <li>5</li>
        <li>-5</li>
        <li>500000</li>
        <li>InvalidWord</li>
      </ul>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
      costTest:
      <ul>
        <li>null</li>
        <li>0</li>
        <li>5</li>
        <li>-5</li>
        <li>500000</li>
        <li>InvalidWord</li>
      </ul>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
      currency:
      <ul>
        <li>null</li>
        <li>USD</li>
        <li>GBP</li>
        <li>EUR</li>
      </ul>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
      limit:
      <ul>
        <li>null</li>
        <li>0</li>
        <li>5</li>
        <li>-5</li>
        <li>500000</li>
        <li>InvalidWord</li>
      </ul>
    </div>
    Along side of MyComponent.jsx, we write MyComponentParameters.jsx.<br/>
    It's just a normal javascript object, which lists out all the parameters we might want to test.<br/>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
    <img src='/t1.png' style={{maxWidth:'175px'}}/>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
          <img src='/t2.png' style={{ maxWidth: '175px' }}/>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px',verticalAlign:'top'}}>
          <img src='/t3.png' style={{ maxWidth: '175px' }}/>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
          <img src='/t4.png' style={{ maxWidth: '175px' }}/>
    </div>

    <HH2>Already a Win!</HH2>
    Now that we've listed the test values for each component parameter, react-factorial-test gives us a way to display them.<br/>
    This helps team mates make sure there is clarity about each value and think about the requirements.<br/>
    You can also add notes to your test values!
    This component is called <b>ParameterDisplay</b>.  It takes the values listed above and makes them human readable, along with notes:
    <div style={{maxHeight:'300px',border:'1px solid grey',margin:'15px',overflow:'auto',padding:'10px'}}>
    <ParameterDisplay data={paramData} name='Example Parameters' description='Explore your test values here.'/>
    </div>
    Using this display, your requirements team can understand exactly what you're testing and give feedback if the tests make sense.<br/>

    <HH2>Let's Hit It!</HH2>
    Finally done with the pre-amble.  Let's multiply all those parameters together and see what we've got!<br/>
    <div style={{maxHeight:'400px',minHeight:'400px',border:'1px solid grey',margin:'15px',overflow:'auto',padding:'10px'}}>
    <div style={{position:'relative',height:'400px'}}>
      <MultiTest
        id='SamplePage1'
        target={<LineItem/>}
        test={
        [ [ paramData.countTest,paramData.costTest,paramData.currencyTest,paramData.limitTest ] ]}
      />
      </div>
    </div>
    <br/>
    ZOMG!!  Did you see how fast you just ran 864 tests!  ( 6 * 6 * 4 * 6 = 864 )<br/>
    Your brain is astoundingly good at picking out things that visually don't match.<br />
    Try clicking the Compact Mode button and just let them wash over you.  You can easily pick out weird tests that way.<br/>
    <HH2>Next Section:</HH2>    
        Now that we have the idea, let's start defining test parameters: <a href='http://local.modaquote.com:6006/?selectedKind=Introduction&selectedStory=How%20to%20define%20tests&full=0&addons=0&stories=1&panelRight=0'>How to define tests</a>.
    <br/>
    <br/>
    
    
    

    </div>
    );
  }
}

