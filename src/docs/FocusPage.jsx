
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

import GoBig from 'mdi-react/ArrowExpandAllIcon';
import GoSmall from 'mdi-react/ArrowCollapseAllIcon';

import UnFilter from 'mdi-react/BookmarkRemoveIcon';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import FlagIcon from 'mdi-react/FlagVariantIcon';
import SelectNo from 'mdi-react/CheckboxBlankOutlineIcon';
import SelectYes from 'mdi-react/CheckboxBlankIcon';
import CloseBox from 'mdi-react/CloseBoxIcon';

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
    
    
    <HH2>Compact vs Test Per Line modes:</HH2>
    Sometimes it is helpful to see all the tests together and let them wash over you.<br />
    Sometimes it is best to see each test on it's own line.  react-factorial-test lets you have it both ways<br />
    <div key='goBig' id={'reactFactorialTest_goBig' + this.id} style={{ display: 'inline-block', padding: '2px', height: '18px', backgroundColor: 'lightgreen', border: '1px solid black' }}
      onClick={() => this.goBig()} title='Toggle: One Test Per Line'>
      <GoBig width={18} height={18} />
    </div>&nbsp;
    <div key='goSmall' id={'reactFactorialTest_goSmall' + this.id} style={{ display: 'inline-block', padding: '2px', height: '18px', backgroundColor: 'lightgreen', border: '1px solid black' }}
      onClick={() => this.goSmall()} title='Toggle: Compact Mode'>
      <GoSmall width={18} height={18} />
    </div>

      <HH2>Single Focus:</HH2>
      When viewing one test per line, click the magnifying glass to show only the selected test.<br />
      Even if you reload the page, your filters and focus items will remain!  This allows you to make edits to your code but keep your test focus.<br/>
        <div style={{ padding: '2px', height: '18px', backgroundColor: 'lightgreen', border: '1px solid black', width: 20, display: 'inline-block' }}          
          title='Show only this test'
        ><MagnifyIcon width={18} height={18} /></div>

      <HH2>Un-Focus / Remove Filters:</HH2>
      If you're done looking at specific tests and want to look at the whole list again just click this.<br/>
        <div style={{ display: 'inline-block', padding: '2px', height: '18px', backgroundColor: 'lightgreen', border: '1px solid black' }}          
          title='UnFocus / Show All Tests'
        ><UnFilter width={18} height={18} /></div>

        <HH2>Red Flag Tests:</HH2>
        Use this feature to flag tests that need further review.  You can flag as many tests as you want and unflag them as you fix problems.<br/>
        Use the flag magnifier button to look at only the flagged tests.<br/>
        <div style={{ padding: '2px', height: '18px', backgroundColor: 'lightgreen', border: '1px solid black', width: 20, display: 'inline-block' }}
          onClick={() => this.toggleFlag(holdName)}
          title='Flag test for review'
        ><FlagIcon width={18} height={18} /></div>&nbsp;
        <div style={{ padding: '2px', height: '18px', backgroundColor: 'crimson' , border: '1px solid black', width: 20, display: 'inline-block' }}
          onClick={() => this.toggleFlag(holdName)}
          title='Flag test for review'
        ><FlagIcon width={18} height={18} /></div>&nbsp;          
        <div style={{ display: 'inline-block', padding: '2px', height: '18px', backgroundColor: 'lightgreen', border: '1px solid black' }}
          onClick={() => this.toggleFlagVisible()} title='Focus On Flagged Tests'
        ><MagnifyIcon width={18} height={18} /><FlagIcon width={18} height={18} /></div>

        <HH2>Comparison Buttons:</HH2>
        Sometimes you want to compare tests even though you have other tests flagged.<br/>
        The compare buttons give you a way to look at two tests side by side, without changing which tests you have flagged.<br/>
        Use the comparison magnifier button to look only at test with the comparison box filled in.<br/>
        <div style={{ padding: '2px', height: '18px', backgroundColor: 'lightgreen', border: '1px solid black', width: 20, display: 'inline-block' }}          
          title='Include test for comparisons'
        ><SelectNo width={18} height={18} /></div>&nbsp;
        <div style={{ padding: '2px', height: '18px', backgroundColor: 'lightgreen', border: '1px solid black', width: 20, display: 'inline-block' }}          
          title='Include test for comparisons'
        ><SelectYes width={18} height={18} /></div>&nbsp;
        <div style={{ display: 'inline-block', padding: '2px', height: '18px', backgroundColor: 'lightgreen', border: '1px solid black' }}
          onClick={() => this.toggleCompVisible()} title='Focus On Comparison Tests'
        ><MagnifyIcon width={18} height={18} /><SelectYes width={18} height={18} /></div>  

        <HH2>Per Test Note:</HH2>
        Each test has a small note field.  This allows you to remind yourself of why you flagged a test.


    <h1>Next Section:</h1>
        <a href='/?selectedKind=Introduction&selectedStory=Conclusion&full=0&addons=0&stories=1&panelRight=0'>Conclusion</a> and Other Resources:

    </div>
    );
  }
}

