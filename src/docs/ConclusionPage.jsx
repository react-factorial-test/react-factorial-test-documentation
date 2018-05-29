
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
export default class MultiPage extends React.Component {
  render()
  {
    return(
   <div>
        <HH2>Conclusion:</HH2>
Thanks for stopping by and taking a look at react-factorial-test.  I hope you find it useful.

        <HH2>Why "Factorial" instead of some other word?</HH2>
        Combinatorial doesn't seem right because a combination can repeat values, where you cannot repeat parameters in a component.<br />
        Exponential seems to be a little bit like over-selling things.  And it's not x to the nth anyway.<br/>
        In the end, I just felt like "factorial" gives the best idea of what the tool is about.<br/>

        <HH2>About the Samples:</HH2>
        Here is a little more information about each of the samples shown to the right:
        <ul>
          <li><b>Color/Border/Shape</b>: Shows the extra simple component to illustrate factorial testing.</li>
          <li><b>SimpleMath</b>: Shows an easy to understand component with many ways of multiplying it's tests</li>
          <li><b>react-json-grid</b>: This is a complex sample case meant to show a more real world usage of the tool. react-json-grid is still a work in progress.</li>
          <li><b>Default Storybook</b>: This section is left here to show how normal testing in storybook looks for comparison's sake.</li>
        </ul>

        <HH2>How to read the Sample Code:</HH2>
        You can check out the example code here:<br />
        <a href='https://github.com/react-factorial-test/react-factorial-test-documentation'>https://github.com/react-factorial-test/react-factorial-test-documentation</a><br/>
        <br/>
        Or you can review the source code for react-factorial-test here:<br/>
        <a href='https://github.com/react-factorial-test/react-factorial-test'>https://github.com/react-factorial-test/react-factorial-test</a><br />
        
        <HH2>Please let me know if your company uses the code:</HH2>
        We would love to find out if your efforts are using react-factorial-test.<br />
        If you don't mind people knowing that you use this tool, we would love to give you a shout out.<br/>
        Or even if you don't want any recognition, issues and ideas are always welcome on the github page given above.


        <HH2>More about Storybook:</HH2>
        Storybook info:
        <a href='https://storybook.js.org/'>https://storybook.js.org/</a><br />
        <br/>
        Storybook is a wonderful component state testing tool.  It lets you quickly get right to the state you need to see for each component.

        <HH2>Why Patreon?</HH2>
        I decided to add an on-line tip jar to this project:<br/>
        <a href='https://www.patreon.com/ReactFactorialTest'>https://www.patreon.com/ReactFactorialTest</a><br /><br />

        The basic trade of open source is that I make the code available in exchange for fixes and improvements.<br/>
        Among coders, I think that makes sense.  But at the same time, I use many components that I will never contribute on for lack of need.<br/>
        In those cases I feel like I'm not giving back enough<br/>
        However, I am willing to give a dollar or so each month to support the community.  And if a thousand like minded people exist in the world then that
        developer gets a tidy little bonus each month for their work.<br/><br/>        
        I like the idea of Patreon because it enables "micro support".  
        It would be lovely to get a tip for making this open source tool and if you find it useful, feel free to support this project.
        However, if you have ever contributed code, please do not leave a tip.  I'm just as happy to accept enhancements in trade.
        If you're a major corporation and you'd like to support new features (such as GitHub/Jira integration) Patreon is a great way to offer support
        which in turn puts your needs to the top of my work queue.<br/>
        

    </div>
    );
  }
}

