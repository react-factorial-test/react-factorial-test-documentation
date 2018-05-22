import React from 'react';

import { storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import { setOptions } from '@storybook/addon-options';
setOptions({ name:'react-factorial-test',showAddonPanel:false});

import '../static/TestCSS.css';

import IntroPage from '../src/docs/IntroPage';
import SamplePage from '../src/docs/SamplePage';
import ParamPage from '../src/docs/ParamPage';
import MultiPage from '../src/docs/MultiPage';
import ConclusionPage from '../src/docs/ConclusionPage';
import FocusPage from '../src/docs/FocusPage';

import LineItem from '../src/exampleComponentsToTest/lineItem/LineItem';



import {MultiTest} from 'react-factorial-test';
import {ParameterDisplay} from 'react-factorial-test';
import {TestNameTool} from 'react-factorial-test';

import SimpleMath              from '../src/exampleComponentsToTest/simpleMath/SimpleMath.jsx';
import simpleMathParametersRaw from '../src/exampleComponentsToTest/simpleMath/SimpleMathParameters.jsx';
var smData = TestNameTool(simpleMathParametersRaw); // name each test after it's variable name.
//var smData = simpleMathParametersRaw; // name each test after it's variable name.

storiesOf('Introduction', module)
  .add('What is react-factorial-test?', () => <IntroPage/>)
  .add("Let's explore a sample", () => (<SamplePage />))
  .add('How to define tests', () => (<ParamPage />))
  .add('How to multiply tests', () => (<MultiPage/>))
  .add('What are the focus buttons for?', () => (<FocusPage/>))
  .add('Conclusion', () => (<ConclusionPage/>))

storiesOf('Example - SimpleMath', module)
    .add('Introduction', () => (<div>
      <hr /><div style={{ fontSize: '1.5em' }}>SimpleMath - Introduction</div><hr/>
      This view component is intended to display the sum and product of three numbers.<br/>
    For example:<SimpleMath a='5' b='2' c='3'/><i>NOTE! There is a defect in the summation!  We can use these tests to fix it.</i><br/><br/>
    It should not display items that are not supplied:<SimpleMath a='5' /><br/>
    It should gracefully show error data:<SimpleMath a='gazelle' /><br/>
    </div>))
    .add('Parameter Documentation', () => (<ParameterDisplay name='SimpleMath - Parameters' 
                                            description={
                                              <div>
                                              <b>Intro</b><br/>SimpleMath is a display only component to show only the provided numbers, their sum and their product.<br/>
                                              SimpleMath takes three parameters: a, b and c.<br/><br/>
                                              <b>Layout</b><br />In this test suite each of the three parameters has a set of Normal values and a bunch of Evil values.<br/>
                                              This lets us check that the comopnent behaves well under stress,<br/>
                                              It also lets us watch the normal behavior without getting buried in error case handling.<br/><br/>
                                              Each parameter has 3 normal tests defined.<br/>
                                              When you take each of the 3 parameters and run each parameter's 3 normal tests, you'll get 9 tests total. (3+3+3)<br/>
                                              But when you run each parameter's values against each of the other parameter's values, you'll get 27 tests ouput. (3*3*3)<br/><br/>
                                              This parameter multiplication lets you very quickly define a comprehensive test suite for your component.<br/><br/>
                                              <b>Data Location</b><br />
                                              The parameters are defined in <pre>src\exampleComponentsToTest\simpleMath\SimpleMathParameters.jsx</pre><br/>
                                              Click each test name to drill down to the parameters that the test supplies.
                                              </div>
                                            }
                                            data={smData}
                                            />))
  .add('Show A Tests Only', () => (
    <MultiTest
      target={<SimpleMath/>}
      test={
      [ [ smData.ATest.ANormalTest ] ]}
    />))
  
    .add('Show A+B+C. Normal data only', () => (
      <MultiTest
        target={<SimpleMath/>}
        test={
        [ [ smData.ATest.ANormalTest ], 
          [ smData.BTest.BNormalTest ], 
          [ smData.CTest.CNormalTest ],
        ]}
      />))
    .add('Show A*B*C. Normal data only', () => (
      <MultiTest
        target={<SimpleMath/>}
        test={
          [ // three lines of definition, 40 tests generated.
            [// pivot tests by object array data, plus normal and wide versions
              smData.ATest.ANormalTest, smData.BTest.BNormalTest, smData.CTest.CNormalTest,
            ],
          ]}
      />))
  .add('Just A*B, but include evil data', () => (
    <MultiTest
      target={<SimpleMath/>}
      test={
        [ [ smData.ATest, smData.BTest 
        ]]}
    />))
  .add('Show Only One Specific Test', () => (
    <MultiTest
      target={<SimpleMath/>}
      test={
        [ // three lines of definition, 40 tests generated.
          [// display only a single test, to show that the name works correctly
            smData.ATest.ANormalTest.a0Test
          ],
        ]}
    />))

  storiesOf('Default Storybook Examples', module)
    .add('normal data',()=>(<LineItem count={70} cost={3500} limit={10000} />))
    .add('euros format',()=>(<LineItem count={70} cost={3500} limit={10000} currency='EUR'/>))
    .add('gbp format',()=>(<LineItem count={70} cost={3500} limit={10000} currency='GBP'/>))
    .add('low limit',()=>(<LineItem count={70} cost={3500} limit={100}/>))
    .add('high limit',()=>(<LineItem count={70} cost={3500} limit={100000}/>))
    .add('null A',()=>(<LineItem count={null} cost={3500} limit={10000}/>))
    .add('null B',()=>(<LineItem count={70} cost={null} limit={10000}/>))
        