
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
    <h1>Conclusion:</h1>
    Once we have many variations on our tests, we need to compare and contrast them.<br/>  
    Use the focus buttons to "zoom in" on a single test while editing, or to look at two tests side by side.

        <HH2>About the Samples:</HH2>
        When building your tests create a tag that takes the parameter definitions and the multiplications to create:<br />

        <HH2>How to read the Sample Code:</HH2>
        github link for react-factorial-test-documentation:<br />

        <HH2>More about Storybook:</HH2>
        Storybook info:<br />


        <HH2>Why Patreon:</HH2>
        I like the idea of Patreon, and it would be lovely to get a tip for making this open source.
        If you like the tool, but don't ever see yourself contributing code, 
        this is a way to chip into development without having to put in any work.


    </div>
    );
  }
}

