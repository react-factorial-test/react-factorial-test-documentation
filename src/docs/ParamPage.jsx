
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

import ConvertIcon from 'mdi-react/ArrowDownBoldHexagonOutlineIcon';

const GT = ({children}) => (  <span style={{color:'lime'}}>{children}</span>);
const BT = ({ children }) => (<span style={{ color: 'aqua' }}>{children}</span>);
const YT = ({ children }) => (<span style={{ color: 'yellow' }}>{children}</span>);
const PT = ({ children }) => (<span style={{ color: 'purple' }}>{children}</span>);
const GLD = ({ children }) => (<span style={{ color: 'gold' }}>{children}</span>);
const HH2 = ({ children }) => (<h2 style={{ marginBottom: '2px',marginTop:'15px' }}>{children}</h2>);

// Non interactive component that multiplies and adds up to three numbers
export default class IntroPage extends React.Component {
  render()
  {
    return(
   <div>
    <h1>Parameter Definition:</h1>
    Parameter reuse is a core theme of this tool.<br/>  
    Here is how you define your parameters:

      <HH2>The tests are defined by one JSON object:</HH2>
      When building your tests create an object for each group and for each test object:<br/>
      For example: shapeParamData.colorTest contains three test objects.<br/>
      <pre style={{padding:'10px',border:'1px solid lightgrey',backgroundColor:'black',color:'white',margin:'0px'}}>
          const shapeParamData =<BT>//-- This is my outer test object.  It contains 3 test groups.</BT><br />
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
      };              
      </pre>

      <HH2>A leaf node object specifies the test parameter values:</HH2>
      In this case you can see how RTest is applied to the ShapeComponent to create a test.<br/>
      <pre style={{padding:'10px',border:'1px solid lightgrey',backgroundColor:'black',color:'white',margin:'0px'}}>
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>RTest</GT>: &#123; color: 'red' },  <BT>//-- First group, first test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ConvertIcon fill='gold'/><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;<YT>ShapeComponent</YT> color='red'/>
      </pre>

      <HH2>A single test object may contain many parameters</HH2>
      <pre style={{padding:'10px',border:'1px solid lightgrey',backgroundColor:'black',color:'white',margin:'0px'}}>
          &nbsp;&nbsp;<GT>colorTest</GT>: &#123;<BT>//-- First test group</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>RTest</GT>: &#123; color: 'red',   label:'label red',   foo:'bar' },  <BT>//-- First group, first test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>GTest</GT>: &#123; color: 'green', label:'label green', foo:'bally' },<BT>//-- First group, second test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>BTest</GT>: &#123; color: 'blue',  label:'label blue',  foo:'bax' }, <BT> //-- First group, third test</BT><br />
      &nbsp;&nbsp;},<br />
      </pre>

      <HH2>Of course, that will set the equivalent parameters:</HH2>
      <pre style={{padding:'10px',border:'1px solid lightgrey',backgroundColor:'black',color:'white',margin:'0px'}}>
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>RTest</GT>: &#123; color: 'red',   label:'label red',   foo:'bar' },  <BT>//-- First group, first test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ConvertIcon fill='gold' /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;<YT>ShapeComponent</YT> color='red' label='label red' foo='bar'/>
      </pre>
      

      <HH2>A test object can even contain handlers and sub-objects</HH2>
      <pre style={{padding:'10px',border:'1px solid lightgrey',backgroundColor:'black',color:'white',margin:'0px'}}>
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>RTest</GT>: &#123; color:&#123;R:255,G:100,B:0} onClick:doSomething },  <BT>//-- First group, first test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ConvertIcon fill='gold' /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;<YT>ShapeComponent</YT> color:&#123;&#123;R:255,G:100,B:0}} onClick:&#123;doSomething}/>
      </pre>

      <HH2>The 'Test' suffix is important.  It separates test wrappers from parameter data.</HH2>
      <pre style={{padding:'10px',border:'1px solid lightgrey',backgroundColor:'black',color:'white',margin:'0px'}}>
          &nbsp;&nbsp;<GT>color<u>Test</u></GT>: &#123;<BT>       //-- First test group</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>colorGood<u>Test</u></GT>: &#123;<BT> //-- First test sub group</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>R<u>Test</u></GT>: <BT>        //-- First actual test object</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; color: 'red',   label:'label red',   foo:'bar' },  <BT> //-- Actual parameter data.  </BT><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BT>             //-- Because these attribute names don't end in 'Test',   </BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BT>             //-- the system knows the object is parameter data.  </BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
          &nbsp;&nbsp;}<br />
      </pre>
            
      <HH2>This naming convention allows you to slice and dice your tests:</HH2>
      <pre style={{padding:'10px',border:'1px solid lightgrey',backgroundColor:'black',color:'white',margin:'0px'}}>
          const shapeParamData =<BT>  //-- This is my outer test object. </BT><br />
      &#123;<br />
          &nbsp;&nbsp;<GT>colorTest</GT>: &#123;<BT>          //-- Color parameter test group</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>colorSimpleTest</GT>: &#123;<BT>  //-- Test color names</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>RTest</GT>: &#123; color: 'red' },  <BT>             //-- First group, first test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>GTest</GT>: &#123; color: 'green' },<BT>             //-- First group, second test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>BTest</GT>: &#123; color: 'blue' }, <BT>             //-- First group, third test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;},<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>colorInvalidTest</GT>: &#123;<BT>  //-- Test invalid values</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>NullTest</GT>:  &#123; color: null },  <BT>          //-- null</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>EmptyTest</GT>: &#123; color: '' },<BT>              //-- empty</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>WrongTest</GT>: &#123; color: 'NotAColorName' }, <BT>//-- invalid</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;},<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>colorByNumberTest</GT>: &#123;<BT>  //-- Test numeric values</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>Num1Test</GT>: &#123; color: '#FFF' },<BT>           //-- white</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>Num2Test</GT>: &#123; color: '#F00' },<BT>           //-- red</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>Num3Test</GT>: &#123; color: '#0F0' },<BT>           //-- green</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;},<br />
      &nbsp;&nbsp;},<br />
      };              <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ConvertIcon fill='gold' /><br />
          shapeParamData.colorTest                             => <GLD>runs all 9 tests.</GLD><br/>      
          shapeParamData.colorTest.colorInvalidTest            => <GLD>runs only the 3 bad data tests.</GLD><br />
          shapeParamData.colorTest.colorByNumberTest.Num2Test  => <GLD>runs only 1 specifc test.</GLD><br />
      </pre>

      <HH2>The TestNameTool makes your variable names appear in the data:</HH2>      
      This is important.  Once you pass the object into react-factorial-test the variable name of each test object is lost.<br/>
      To prevent that, we use this function to add your test names into the object without forcing you to type the name twice.<br/>
      <pre style={{padding:'10px',border:'1px solid lightgrey',backgroundColor:'black',color:'white',margin:'0px'}}>
          const shapeParamData =<BT>//-- You type this part </BT><br />
      &#123;<br />
          &nbsp;&nbsp;<GT>colorTest</GT>: &#123;<BT>//-- Color parameter test group</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>colorSimpleTest</GT>: &#123;<BT>//-- Test color names</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>RTest</GT>: &#123; color: 'red' },  <BT>             //-- First group, first test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>GTest</GT>: &#123; color: 'green' },<BT>             //-- First group, second test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>BTest</GT>: &#123; color: 'blue' }, <BT>             //-- First group, third test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;},<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>colorInvalidTest</GT>: &#123;<BT>//-- Test invalid values</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>NullTest</GT>: &#123; color: null },  <BT>           //-- null</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>EmptyTest</GT>: &#123; color: '' },<BT>              //-- empty</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>WrongTest</GT>: &#123; color: 'NotAColorName' }, <BT>//-- invalid</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;},<br />
      &nbsp;&nbsp;},<br />
      };              <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ConvertIcon fill='gold' /><br />
&nbsp;&nbsp;<BT>//-- Import the TestNameTool and make your test data ready to use:</BT><br />          
&nbsp;&nbsp;<PT>import</PT> Shape <PT>from</PT> '../exampleComponentsToTest/shapes/Shape';<br/>
&nbsp;&nbsp;<PT>import</PT> ShapeParamRaw <PT>from</PT> '../exampleComponentsToTest/shapes/ShapesParameters';<br />
&nbsp;&nbsp;<PT>import</PT> &#123;TestNameTool} <PT>from</PT> 'react-factorial-test';<br /><br />
&nbsp;&nbsp;var shapeDataExtended = TestNameTool(ShapeParamRaw); <BT>// name each test after it's variable name.</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ConvertIcon fill='gold' /><br />
      
          &nbsp;&nbsp;<BT>//-- Now the data looks like this:</BT><br />          
          &nbsp;&nbsp;<GT>colorTest</GT>: &#123;<BT>//-- Color parameter test group</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>colorSimpleTest</GT>: &#123;<BT>//-- Test color names</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>RTest</GT>: &#123; color: 'red' , <u>tstName='RTest'</u> },  <BT>         //-- First group, first test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>GTest</GT>: &#123; color: 'green' , <u>tstName='GTest'</u> },<BT>         //-- First group, second test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>BTest</GT>: &#123; color: 'blue' , <u>tstName='BTest'</u> }, <BT>         //-- First group, third test</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;},<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>colorInvalidTest</GT>: &#123;<BT>//-- Test invalid values</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>NullTest</GT>: &#123; color: null , <u>tstName='NullTest'</u> },  <BT>            //-- null</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>EmptyTest</GT>: &#123; color: '' , <u>tstName='EmptyTest'</u> },<BT>              //-- empty</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GT>WrongTest</GT>: &#123; color: 'NotAColorName' , <u>tstName='WrongTest'</u> }, <BT>//-- invalid</BT><br />
          &nbsp;&nbsp;&nbsp;&nbsp;},<br />
      &nbsp;&nbsp;},<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ConvertIcon fill='gold' /><br />          
&nbsp;&nbsp;&nbsp;&nbsp;<BT>//--- Now use that enhanced data...</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;<BT>//--- to display documentation</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<YT>ParameterDisplay</YT> data=&#123;shapeDataExtended} <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name='Shape Parameters' <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description='Explore your test values here:' /><br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;<BT>//--- and to run tests</BT><br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<YT>MultiTest</YT> target=&#123;&lt;<YT>Shape</YT>/>} id='MTID01' <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test=&#123;[ [ shapeDataExtended.colorTest ] ]} /><br />
      </pre>
      
      <HH2>Special keyword: _rft allows you to enter a comment about the test.</HH2>
      <pre style={{padding:'10px',border:'1px solid lightgrey',backgroundColor:'black',color:'white',margin:'0px'}}>
          &nbsp;&nbsp;&nbsp;&nbsp;<GT>RTest</GT>: &#123; color: 'red', _rtf:'<BT>this is a test comment for the documentation</BT>' },<br />
      </pre>


    <h1>Next Section:</h1>
            How to specify which <a href='/?selectedKind=Introduction&selectedStory=How%20to%20multiply%20tests&full=0&addons=0&stories=1&panelRight=0'>multiplications</a> you want to perform:

    </div>
    );
  }
}

