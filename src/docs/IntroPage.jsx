
import React from 'react';
import autoBind from 'react-autobind';

import LineItem from '../exampleComponentsToTest/lineItem/LineItem';
import LineItemParam from '../exampleComponentsToTest/lineItem/LineItemParameters';

import {TestNameTool} from 'react-factorial-test';
var paramData = TestNameTool(LineItemParam); // name each test after it's variable name.

import {ParameterDisplay} from 'react-factorial-test';
import {MultiTest} from 'react-factorial-test';

// Non interactive component that multiplies and adds up to three numbers
export default class IntroPage extends React.Component {
  render()
  {
    return(
      <div>
    <center>
    <hr/>
      <h1>react-factorial-test</h1>
    <hr/>
    <img src='/fact1.png'/><br/>
      <img src='/factorial.png'/>
    <br/>
    <hr/>
    </center>
    <h1>Introduction</h1>
    This is the documentation for react-factorial-test.
    <ul>
      <li>Rapid test generation based on parameter documentation.</li>
      <li>Tools for side-by-side comparison of test results.</li>
      <li>Easily review test combinations that would be tedious to spell out each as their own story.</li>
      <li>Storybook compatible</li>
    </ul>
    <h1>What is a "factorial" test?</h1>
    A factorial test allows you to list a set of all test-able values for each parameter of your component.<br/>
    Then it "multiplies" all of your parameters together.  This generates a test for all combinations you care about, instead of forcing you to add a manually written story for each test.<br/>
    <br/>
    So if your component takes 3 parameters, and you want to test the values [0,5,null] for each parameter you would end up with 27 generated tests.<br/>
    All you need to do is list the parameter options you want to test for your component.  
    
    <h1>Let's see an example:</h1>
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

    <h1>Normal Storybook:</h1>
    So you might normally write a set of Storybook stories that look like this:
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
    <b>But we can do better!</b><br/>
    What happens when you add many more parameters?<br/>
    What happens when you want to compare two states of the same componenet?<br/>
    When 'limit' is undefined, what is supposed to happen?<br/>
    What happens when you have many more parameters and hundreds of possible states to test?<br/>
    What happens when you get serious about bad input checking and all the tests that demands?<br/>
    <i>How many times do you really want to repeat yourself about the name of the component and each parameter???</i><br/>
    Why did you do all this typing, but still have no documentation that a Biz Dev teammate can actually read?<br/>

    <h1>Let's Get Factorial:</h1>
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
    <img src='/t1.png'/>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
    <img src='/t2.png'/>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px',verticalAlign:'top'}}>
    <img src='/t3.png'/>
    </div>
    <div style={{display:'table-cell',border:'1px solid grey',padding:'10px'}}>
    <img src='/t4.png'/>
    </div>

    <h1>Already a Win!</h1>
    Now that we've listed the test values for each component parameter, react-factorial-test gives us a way to display them.<br/>
    This helps team mates make sure there is clarity about each value and think about the requirements.<br/>
    You can also add notes to your test values!
    This component is called <b>ParameterDisplay</b>.  It takes the values listed above and makes them human readable, along with notes:
    <div style={{maxHeight:'300px',border:'1px solid grey',margin:'15px',overflow:'auto',padding:'10px'}}>
    <ParameterDisplay data={paramData} name='Example Parameters' description='Explore your test values here.'/>
    </div>
    Using this display, your requirements team can understand exactly what you're testing and give feedback if the tests make sense.<br/>

    <h1>Let's Hit It!</h1>
    Finally done with the pre-amble.  Let's multiply all those parameters together and see what we've got!<br/>
    <div style={{maxHeight:'400px',minHeight:'400px',border:'1px solid grey',margin:'15px',overflow:'auto',padding:'10px'}}>
    <div style={{position:'relative',height:'400px'}}>
      <MultiTest
        target={<LineItem/>}
        test={
        [ [ paramData.countTest,paramData.costTest,paramData.currencyTest,paramData.limitTest ] ]}
      />
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    
    
    

    </div>
    );
  }
}

