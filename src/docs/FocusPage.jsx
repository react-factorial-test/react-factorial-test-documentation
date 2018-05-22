
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
    <h1>Focus Buttons:</h1>
    Once we have many variations on our tests, we need to compare and contrast them.<br/>  
    Use the focus buttons to "zoom in" on a single test while editing, or to look at two tests side by side.

      <HH2>Single Focus:</HH2>
      When building your tests create a tag that takes the parameter definitions and the multiplications to create:<br />

        <HH2>Red Flag Tests:</HH2>

        <HH2>Comparison Buttons:</HH2>

        <HH2>Compact vs Test Per Line modes:</HH2>

    <h1>Next Section:</h1>
    Conclusion and Other Resources:

    </div>
    );
  }
}

