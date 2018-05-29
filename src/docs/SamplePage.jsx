
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
    We also have some basic requirements about the component:<br/>

    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
      <b>Test Component Parameters:</b>
      <ul>
        <li>Count Needed</li>
        <li>Unit cost</li>
        <li>Currency</li>
        <li>Limit</li>
      </ul>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'5px'}}>
      <b>Test Component Behaviors:</b>
      <ul>
        <li>Shows a Validation Message when count or cost are missing.</li>
        <li>Currency defaults to USD, but support EUR and GBP currencies.</li>
        <li>Displays the count times the cost as a total.</li>
        <li>Shows the total in red if it is over the limit.</li>
      </ul>
    </div>

    <HH2>Normal Storybook:</HH2>
    In normal Storybook, you might write a set of stories that look like this:
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
      <b>Storybook Code:</b><br/>
      <img src='/normalStorybookCode.png'/>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'5px'}}>
      <b>Storybook Menu:</b><br/>
      <img src='/normalStorybookMenu.png'/>
    </div>
    This is pretty OK.  It's got some bad input testing, it exercises the general needs of the component.<br/>
    <br/>
    <HH2>But we can do better!</HH2>
    That storybook testing is a huge help.  However, there are some hassles involved too:
    <ul>
    <li>What happens when you add many more parameters?</li>
    <li>What happens when you want to compare two states of the same component?</li>
    <li>When 'limit' is undefined, what is supposed to happen?</li>
    <li>What happens when you have many parameters and hundreds of possible states to test?</li>
    <li>What happens when you get serious about bad input checking and all the tests that demands?</li>
    <li><i><b>How many times do you really want to repeat yourself about the name of the component and each parameter???</b></i></li>
    <li>Why did you do all this typing, but still have no documentation that a Biz Dev teammate can actually read?</li>
    </ul>

    <HH2>Let's Get Factorial:</HH2>
        The first key 'trick' of react-factorial-test is to document each of the parameter values we want to test.<br />
        Let's start with testing these parameter values for our sample component:<br/>
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
      cost:
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
        </div><br />
        
    Along side of MyComponent.jsx, we write MyComponentParameters.jsx.<br/>
    It's just a normal javascript object, which lists out all the parameters we might want to test.<br/>
    We use the suffix 'Test' to tell the system which objects are a Test and which objects are a parameter list.<br />
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
    This helps the team know about handled values and think about their requirements.<br/>
    You can even add notes to your test values!<br/><br/>
    This component is called <b>ParameterDisplay</b>.<br/>It takes the values listed above and makes them human readable, along with notes:<br/>
    <div style={{maxHeight:'300px',border:'1px solid grey',margin:'15px',overflow:'auto',padding:'10px'}}>
    <ParameterDisplay data={paramData} name='Example Parameters' description='Explore your test values here.'/>
    </div>
    Using this display, your requirements team can understand exactly what you're testing and give feedback if the tests make sense.<br/>

    <HH2>Let's Hit It!</HH2>
    We are finally done with the pre-amble.  Let's multiply all those parameters together and see what tests we've got!<br/>
    <div style={{maxHeight:'250px',minHeight:'250px',border:'1px solid grey',margin:'15px',overflow:'auto',padding:'10px'}}>
    <div style={{position:'relative',height:'250px'}}>
      <MultiTest
        id='SamplePage1'
        target={<LineItem/>}
        test={
        [ [ paramData.countTest,paramData.costTest,paramData.currencyTest,paramData.limitTest ] ]}
      />
      </div>
    </div>
    <br/>
        ZOMG!!  Did you see how fast you just wrote 864 tests!  ( 6 * 6 * 4 * 6 = 864 )<br /><br />
        Many of these aren't helpful, so we will teach you how to filter them out.<br/>
        But for now, think about what a time saver it was not having to write all of those tests!<br /><br />
    Your brain is astoundingly good at picking out things that visually don't match.<br />
        Hover your mouse just above each test that looks broken to see what parameters are not rendered correctly.  <br />
    You toggle the 'flagged' mode for each test you'd like to review later.<br/>
    Once you've done that click the magnify flagged icon and you'll "zoom in" to see only the flagged tests.<br/>
    <HH2>Next Section:</HH2>    
        Now that we have the idea, let's start defining test parameters: <a href='/?selectedKind=Introduction&selectedStory=How%20to%20define%20tests&full=0&addons=0&stories=1&panelRight=0'>How to define tests</a>.
    <br/>
    <br/>
    
    
    

    </div>
    );
  }
}

