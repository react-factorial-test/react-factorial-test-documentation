
import React from 'react';
import autoBind from 'react-autobind';

import LineItem from '../exampleComponentsToTest/lineItem/LineItem';
import LineItemParam from '../exampleComponentsToTest/lineItem/LineItemParameters';

import Shape from '../exampleComponentsToTest/shapes/Shape';
import ShapeParamRaw from '../exampleComponentsToTest/shapes/ShapesParameters';
var tst = TestNameTool(ShapeParamRaw); // name each test after it's variable name.

import {TestNameTool} from 'react-factorial-test';
var paramData = TestNameTool(LineItemParam); // name each test after it's variable name.

import {ParameterDisplay} from 'react-factorial-test';
import {MultiTest} from 'react-factorial-test';

import ConvertIcon from 'mdi-react/ArrowDownBoldHexagonOutlineIcon';

const GT = ({children}) => (  <span style={{color:'lime'}}>{children}</span>);
const BT = ({ children }) => (<span style={{ color: 'aqua' }}>{children}</span>);
const YT = ({ children }) => (<span style={{ color: 'yellow' }}>{children}</span>);
const PT = ({ children }) => (<span style={{ color: 'purple' }}>{children}</span>);
const GLD = ({ children }) => (<span style={{ color: 'gold' }}>{children}</span>);
const HH2 = ({ children }) => (<h2 style={{ marginBottom: '2px',marginTop:'15px' }}>{children}</h2>);

// Non interactive component that multiplies and adds up to three numbers
export default class MultiPage extends React.Component {
  render()
  {
    return(
   <div>
    <h1>Parameter Multiplication:</h1>
    Now that you've defined the values for your parameters,
    let's multiply them together to make test runs:<br />  

        <HH2>Multiplications defined in the call to the MultiTest tag:</HH2>
        This is a storybook index.js file.  If you aren't already familiar with storybook.js, you should install it now.
        <pre style={{ padding: '10px', border: '1px solid lightgrey', backgroundColor: 'black', color: 'white', margin: '0px' }}>
            <BT>//-- storybook index.js</BT><br/>
&nbsp;&nbsp;storiesOf('Example - SimpleMath', module)      <BT>  //-- add a chapter to storybook</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;.add('Show MultiTest Only', () => (          <BT>  //-- add a story in the chapter</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<YT>MultiTest</YT>                                 <BT>  //-- run MultiTest</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target=&#123;&lt; <YT>MyComponent</YT>/>}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test=&#123; [ [ <GT>tst.colorTest</GT> ] ] }<BT>  //-- Notice: An Array of Arrays!</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/>))    <br/>        
      </pre>

<HH2>Let's use the first example from the Parameters Page:</HH2>
      <pre style={{padding:'10px',border:'1px solid lightgrey',backgroundColor:'black',color:'white',margin:'0px'}}>
          const tstRaw =<BT>//-- This is my outer test object.  It contains 3 test groups.</BT><br />
      &#123;<br />
          &nbsp;&nbsp;<GT>colorTest</GT>: &#123;<BT>//-- First test group</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>RTest</GT>: &#123; color: 'red' },  <BT>//-- First group, first test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>GTest</GT>: &#123; color: 'green' },<BT>//-- First group, second test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>BTest</GT>: &#123; color: 'blue' }, <BT>//-- First group, third test</BT><br />
      &nbsp;&nbsp;},<br />
          &nbsp;&nbsp;<GT>shapeTest:</GT> &#123;<BT>//-- Second test group.</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>SquareTest</GT>:  &#123; shape: 'square' },<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>DiamondTest</GT>: &#123; shape: 'diamond' },<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>CircleTest</GT>:  &#123; shape: 'circle' },<br />
      &nbsp;&nbsp;},<br />
          &nbsp;&nbsp;<GT>borderTest</GT>: &#123;<BT>//-- Third test group.</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>NoBorderTest</GT>:     &#123; border: 'none' },<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>SolidBorderTest</GT >:  &#123; border: 'solid' },<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>DashedBorderTest</GT >: &#123; border: 'dashed' },<br />
          &nbsp;&nbsp;},<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ConvertIcon fill='gold' /><br />
&nbsp;&nbsp;var tst = TestNameTool(tstRaw); <BT>// Don't forget the TestNameTool!.</BT><br />
      </pre>

        <HH2>The inner arrays are all multiplied together:</HH2>
        Imagine you only want to specify each color and border, but don't want this test to show all the shapes:<br/>
        Notice that there is an outer array with only one element.  The inner array contains the test lists to be run.<br/>
        Every object defined in tst.colorTest will be mixed with every object in tst.borderTest and then rendered with MyComponent.<br/>
        <pre style={{ padding: '10px', border: '1px solid lightgrey', backgroundColor: 'black', color: 'white', margin: '0px' }}>
            <BT>//-- storybook index.js</BT><br/>
&nbsp;&nbsp;storiesOf('Example - SimpleMath', module)      <BT>  //-- add a chapter to storybook</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;.add('Show MultiTest Only', () => (          <BT>  //-- add a story in the chapter</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<YT>MultiTest</YT>                                 <BT>  //-- run MultiTest</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target=&#123;&lt; <YT>MyComponent</YT>/>}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test=&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BT>//-- run each colorTest against each borderTest.</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BT>//-- Skips the shapeTest object, so only 9 tests run.</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ <GT>tst.colorTest</GT> , <GT>tst.borderTest</GT> ] <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/>))    <br/>        
      </pre>
        
        <HH2>The outer arrays are all added together:</HH2>
        Imagine, you only want color times shape, then color times border:<br/>
        First, each object defined in tst.colorTest and tst.shapeTest will be multiplied and rendered.<br />
        Then, each object defined in tst.colorTest and tst.borderTest will be multiplied and rendered.<br />
        <pre style={{ padding: '10px', border: '1px solid lightgrey', backgroundColor: 'black', color: 'white', margin: '0px' }}>
            <BT>//-- storybook index.js</BT><br/>
&nbsp;&nbsp;storiesOf('Example - SimpleMath', module)      <BT>  //-- add a chapter to storybook</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;.add('Show MultiTest Only', () => (          <BT>  //-- add a story in the chapter</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<YT>MultiTest</YT>                                 <BT>  //-- run MultiTest</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target=&#123;&lt; <YT>MyComponent</YT>/>}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test=&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BT>//-- run each colorTest against each shapeTest.</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ <GT>tst.colorTest</GT> , <GT>tst.shapeTest</GT> ]<BT>  //-- Inner array comma implies the multiplication</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,  <BT>                                //-- Outer array comma implies addition</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BT>//-- run each colorTest against each borderTest.</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ <GT>tst.colorTest</GT> , <GT>tst.borderTest</GT> ]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BT>//-- 9 tests in first group plus 9 in second group; so this runs 18 tests.</BT>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/>))    <br/>        
      </pre>

        <HH2>Get all the tests by multiplying everything together...</HH2>
            If you want the full monty, give all three objects to be multiplied.  This will render 27 tests:<br />
        <pre style={{ padding: '10px', border: '1px solid lightgrey', backgroundColor: 'black', color: 'white', margin: '0px' }}>
            <BT>//-- storybook index.js</BT><br/>
&nbsp;&nbsp;storiesOf('Example - SimpleMath', module)      <BT>  //-- add a chapter to storybook</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;.add('Show MultiTest Only', () => (          <BT>  //-- add a story in the chapter</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<YT>MultiTest</YT>                                 <BT>  //-- run MultiTest</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target=&#123;&lt; <YT>MyComponent</YT>/>}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test=&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <BT>//-- all color * all shape * all border..</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ <GT>tst.shapeTest</GT> , <GT>tst.colorTest</GT> , <GT>tst.shapeTest</GT> ]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/>))    <br/>        
      </pre>

        <HH2>Or be very specific about only showing certain tests:</HH2>
        <pre style={{ padding: '10px', border: '1px solid lightgrey', backgroundColor: 'black', color: 'white', margin: '0px' }}>
<BT>//-- storybook index.js</BT><br/>
storiesOf('Example - SimpleMath', module)      <BT>  //-- add a chapter to storybook</BT><br />
&nbsp;&nbsp;.add('Show MultiTest Only', () => (          <BT>  //-- add a story in the chapter</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<YT>MultiTest</YT>                                 <BT>  //-- run MultiTest</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target=&#123;&lt; <YT>MyComponent</YT>/>}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test=&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <BT>//-- just circle * just red * all border..               ( 3 tests )</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ <GT>tst.shapeTest.CircleTest</GT> , <GT>tst.colorTest.redTest</GT> , <GT>tst.borderTest</GT> ],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <BT>//-- then run just diamond * just red * all border..     ( 3 more tests )</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ <GT>tst.shapeTest.DiamondTest</GT> , <GT>tst.colorTest.redTest</GT> , <GT>tst.borderTest</GT> ],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <BT>//-- just run square * red * solid border..              ( one last test )</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ <GT>tst.shapeTest.SquareTest</GT> , <GT>tst.colorTest.redTest</GT> , <GT>tst.borderTest.SolidBorderTest</GT> ]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <BT>//--                                                     ( runs 7 tests total )</BT><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;/>))    <br/>        
      </pre>


<HH2>Separate your test definitions by what you're expecting to multiply together:</HH2>
It is helpful to separate your "normal" tests from your bad data test cases.<br/>
Generally, you'll want to build groups of tests that you're likely to multiply again and again,<br/>
while leaving the less common tests in a separate group.<br/>


    <h1>Next Section:</h1>
            Reviewing the <a href='/?selectedKind=Introduction&selectedStory=What%20are%20the%20focus%20buttons%20for%3F&full=0&addons=0&stories=1&panelRight=0'>Focus Buttons</a>:

    </div>
    );
  }
}

