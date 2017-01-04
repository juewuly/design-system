/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const path1Id = 'path-1';
const path2Id = 'path-2';
const path3Id = 'path-3';
const path4Id = 'path-4';
const path5Id = 'path-5';

const pathContent1Id = 'path-content-1';
const pathContent2Id = 'path-content-2';
const pathContent3Id = 'path-content-3';
const pathContent4Id = 'path-content-4';
const pathContent5Id = 'path-content-5';

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let Coach = props =>
  <div className={classNames('slds-path-coach', { 'slds-is-expanded': props.isExpanded })}>
    {props.children}
  </div>;

let Path = props =>
  <div className="slds-grid">
    {props.children}
  </div>;

let Trigger = props =>
  <ButtonIcon
    assistiveText="Expand Sales Coach Tab Panels"
    className="slds-button--icon-border-filled slds-path__trigger slds-no-flex slds-m-horizontal--small"
    symbol="chevrondown"
    title="Expand Sales Coaching Tab Panels"
  />;

let Triggerup = props =>
  <ButtonIcon
    assistiveText="Collapse Sales Coach Tab Panels"
    className="slds-button--icon-border-filled slds-path__trigger slds-no-flex slds-m-horizontal--small slds-flip--vertical"
    symbol="chevrondown"
    title="Collapse Sales Coaching Tab Panels"
  />;

let Action = props =>
  <button className={classNames('slds-button slds-button--brand slds-path__mark-complete slds-no-flex slds-m-horizontal--small', props.className)}>
    {props.children}
  </button>;

let ListMain = props => {
  let ariaOrientation;
  if(props.listRole === 'listbox') {
    ariaOrientation = 'horizontal';
  }
  return(
    <div className="slds-tabs--path" role="application">
      <ul className="slds-tabs--path__nav" role={props.listRole} aria-orientation={ ariaOrientation }>
        {props.children}
      </ul>
    </div>
  );
};

let ListItem = props => {
  let ariaExpanded;
  if(props.role === 'tab') {
    ariaExpanded = props.ariaExpanded || 'false';
  }

  return(
    <li className={classNames('slds-tabs--path__item', props.className)} role="presentation">
      <a
        aria-controls={ props.ariaControls }
        aria-expanded={ ariaExpanded }
        aria-selected={props.tabIndex ? 'true' : 'false'}
        className="slds-tabs--path__link"
        href="javascript:void(0);"
        id={ props.id }
        role={props.role}
        tabIndex={props.tabIndex || '-1'}
      >
        {props.children}
      </a>
    </li>
  );
};

let CoachContent = props => {
  const contentClassNames = classNames(
    'slds-tabs--path__content',
    {
      'slds-hide': !props.isActive,
      'slds-show': props.isActive
    }
  );

  return(
    <div
      aria-labelledby={ props.ariaLabelledby }
      className={ contentClassNames }
      id={ props.id }
      role="tabpanel"
    >
      { props.children }
    </div>
  );
};

let CoachExample1 = props =>
  <div className="slds-grid slds-grid--align-spread">
    <div className="slds-coach__keys slds-size--1-of-2 slds-m-left--x-large">
      <div className="slds-grid slds-grid--align-spread">
        <h2 className="slds-text-title--caps slds-p-bottom--small">Key Fields This Stage</h2>
        <span className="slds-text-body--small"><button className="slds-button">Edit</button></span>
      </div>
      <dl className="slds-dl--horizontal">
        <dt className="slds-coach__item slds-dl--horizontal__label">Expected Budget</dt>
        <dd className="slds-coach__value slds-dl--horizontal__detail">$10,000</dd>
        <dt className="slds-coach__item slds-dl--horizontal__label">Lead Source</dt>
        <dd className="slds-coach__value slds-dl--horizontal__detail">Marketing and Web Referral</dd>
        <dt className="slds-coach__item slds-dl--horizontal__label">Support Engineer</dt>
        <dd className="slds-coach__value slds-dl--horizontal__detail"><a href="javascript:void(0);">Jack Arthur</a></dd>
      </dl>
    </div>
    <div className="slds-coach__guidance slds-size--1-of-2 slds-m-left--x-large">
      <h2 className="slds-text-title--caps slds-p-bottom--small slds-has-divider--bottom">Guidance for Success</h2>
      <div className="slds-text-longform slds-p-top--medium">
        <p>Regularly cross-sell related products using <a href="javascript:void(0);">cross-sell tactics and principles</a>.</p>
        <p>Prepare demo deck using the <a href="javascript:void(0);">latest template</a> and review with Marketing and Sales teams. Review demo copy with Legal and Doc team.</p>
        <p>Look up <a href="javascript:void(0);">needs analysis principles</a> and review selling plan with Sales Engineer.</p>
      </div>
    </div>
  </div>;

let CoachExample2 = props =>
  <div className="slds-grid slds-grid--align-spread">
    <div className="slds-coach__keys slds-size--1-of-2 slds-m-left--x-large">
      <div className="slds-grid slds-grid--align-spread">
        <h2 className="slds-text-title--caps slds-p-bottom--small">Key Fields This Stage</h2>
        <span className="slds-text-body--small"><button className="slds-button">Edit</button></span>
      </div>
      <dl className="slds-dl--horizontal">
        <dt className="slds-coach__item slds-dl--horizontal__label">Build State</dt>
        <dd className="slds-coach__value slds-dl--horizontal__detail">In Motion</dd>
        <dt className="slds-coach__item slds-dl--horizontal__label">Expected Sign Date</dt>
        <dd className="slds-coach__value slds-dl--horizontal__detail">-</dd>
        <dt className="slds-coach__item slds-dl--horizontal__label">Key Buyer</dt>
        <dd className="slds-coach__value slds-dl--horizontal__detail"><a href="javascript:void(0);">-</a></dd>
      </dl>
    </div>
    <div className="slds-coach__guidance slds-size--1-of-2 slds-m-left--x-large">
      <h2 className="slds-text-title--caps slds-p-bottom--small slds-has-divider--bottom">Guidance for Success</h2>
      <div className="slds-text-longform slds-p-top--medium">
        <p>Check out the latest Negotiation and Review tactics on our <a href="javascript:void(0);">online portal here</a>.</p>
        <p>Review Quote with the Legal and Marketing team and be sure to approve with Exec.</p>
        <p>Set up at time to delivery schedule and check with Inventory.</p>
      </div>
    </div>
  </div>;


///////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let StateA = props =>
  <Coach>
    <Path>
      <ListMain listRole="listbox">
        <ListItem className="slds-is-complete" id={ path1Id } role="option">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Contacted</span>
        </ListItem>
        <ListItem className="slds-is-complete" id={ path2Id } role="option">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Open</span>
        </ListItem>
        <ListItem className="slds-is-current" id={ path3Id } role="option" tabIndex="0">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Current Stage:</span>
          </span>
          <span className="slds-tabs--path__title">Unqualified</span>
        </ListItem>
        <ListItem className="slds-is-incomplete" id={ path4Id } role="option">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Nurturing</span>
        </ListItem>
        <ListItem className="slds-is-incomplete" id={ path5Id } role="option">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Closed</span>
        </ListItem>
      </ListMain>
      <Action>
        <SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="check" />
        Mark Status as Complete
      </Action>
    </Path>
  </Coach>;

let StateB = props =>
  <Coach>
    <Path>
      <Trigger />
      <ListMain listRole="tablist">
        <ListItem className="slds-is-complete" id={ path1Id } ariaControls={ pathContent1Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Contacted</span>
        </ListItem>
        <ListItem className="slds-is-complete" id={ path2Id } ariaControls={ pathContent2Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Open</span>
        </ListItem>
        <ListItem className="slds-is-current" id={ path3Id } ariaControls={ pathContent3Id } role="tab" tabIndex="0">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Current Stage:</span>
          </span>
          <span className="slds-tabs--path__title">Unqualified</span>
        </ListItem>
        <ListItem className="slds-is-incomplete" id={ path4Id } ariaControls={ pathContent4Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Nurturing</span>
        </ListItem>
        <ListItem className="slds-is-incomplete" id={ path5Id } ariaControls={ pathContent5Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Closed</span>
        </ListItem>
      </ListMain>
      <Action><SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="check" />
      Mark Status as Complete</Action>
    </Path>
    <CoachContent id={ pathContent1Id } ariaLabelledby={ path1Id }>
      <h2>Path 1 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent2Id } ariaLabelledby={ path2Id }>
      <h2>Path 2 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent3Id } ariaLabelledby={ path3Id }>
      <h2>Path 3 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent4Id } ariaLabelledby={ path4Id }>
      <h2>Path 4 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent5Id } ariaLabelledby={ path5Id }>
      <h2>Path 5 Content</h2>
    </CoachContent>
  </Coach>;


let StateD = props =>
  <Demo>
    <Coach isExpanded>
      <Path>
        <Triggerup />
        <ListMain listRole="tablist">
          <ListItem className="slds-is-complete" id={ path1Id } ariaControls={ pathContent1Id } ariaExpanded="true" role="tab">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Contacted</span>
          </ListItem>
          <ListItem className="slds-is-complete" id={ path2Id } ariaControls={ pathContent2Id } ariaExpanded="true" role="tab">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Open</span>
          </ListItem>
          <ListItem className="slds-is-current" id={ path3Id } ariaControls={ pathContent3Id } ariaExpanded="true" role="tab" tabIndex="0">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Current Stage:</span>
            </span>
            <span className="slds-tabs--path__title">Unqualified</span>
          </ListItem>
          <ListItem className="slds-is-incomplete" id={ path4Id } ariaControls={ pathContent4Id } ariaExpanded="true" role="tab">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
            <span className="slds-tabs--path__title">Nurturing</span>
          </ListItem>
          <ListItem className="slds-is-incomplete" id={ path5Id } ariaControls={ pathContent5Id } ariaExpanded="true" role="tab">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
            <span className="slds-tabs--path__title">Closed</span>
          </ListItem>
        </ListMain>
        <Action><SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="check" />
          Mark Status as Complete</Action>
      </Path>
      <CoachContent id={ pathContent1Id } ariaLabelledby={ path1Id }>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={ pathContent2Id } ariaLabelledby={ path2Id }>
        <h2>Path 2 Content</h2>
      </CoachContent>
      <CoachContent id={ pathContent3Id } ariaLabelledby={ path3Id } isActive>
        <CoachExample1 />
      </CoachContent>
      <CoachContent id={ pathContent4Id } ariaLabelledby={ path4Id }>
        <h2>Path 4 Content</h2>
      </CoachContent>
      <CoachContent id={ pathContent5Id } ariaLabelledby={ path5Id }>
        <h2>Path 5 Content</h2>
      </CoachContent>
    </Coach>
  </Demo>;

let StateE = props =>
  <Demo>
    <Coach isExpanded>
      <Path>
        <Triggerup />
        <ListMain listRole="tablist">
          <ListItem className="slds-is-complete" id={ path1Id } ariaControls={ pathContent1Id } ariaExpanded="true" role="tab">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Contacted</span>
          </ListItem>
          <ListItem className="slds-is-complete" id={ path2Id } ariaControls={ pathContent2Id } ariaExpanded="true" role="tab">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Open</span>
          </ListItem>
          <ListItem className="slds-is-current" id={ path3Id } ariaControls={ pathContent3Id } ariaExpanded="true" role="tab">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Current Stage:</span>
            </span>
            <span className="slds-tabs--path__title">Unqualified</span>
          </ListItem>
          <ListItem className="slds-is-incomplete slds-is-active" id={ path4Id } ariaControls={ pathContent4Id } ariaExpanded="true" role="tab" tabIndex="0">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
            <span className="slds-tabs--path__title">Nurturing</span>
          </ListItem>
          <ListItem className="slds-is-incomplete" id={ path5Id } ariaControls={ pathContent5Id } ariaExpanded="true" role="tab">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
            <span className="slds-tabs--path__title">Closed</span>
          </ListItem>
        </ListMain>
        <Action className="slds-path__mark-current">
          Mark as Current Stage</Action>
      </Path>
      <CoachContent id={ pathContent1Id } ariaLabelledby={ path1Id }>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={ pathContent2Id } ariaLabelledby={ path2Id }>
        <h2>Path 2 Content</h2>
      </CoachContent>
      <CoachContent id={ pathContent3Id } ariaLabelledby={ path3Id }>
        <h2>Path 3 Content</h2>
      </CoachContent>
      <CoachContent id={ pathContent4Id } ariaLabelledby={ path4Id } isActive>
        <CoachExample2 />
      </CoachContent>
      <CoachContent id={ pathContent5Id } ariaLabelledby={ path5Id }>
        <h2>Path 5 Content</h2>
      </CoachContent>
    </Coach>
  </Demo>;

let StateF = props =>
  <Coach>
    <Path>
      <Trigger />
      <ListMain listRole="tablist">
        <ListItem className="slds-is-incomplete" id={ path1Id } ariaControls={ pathContent1Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Contacted</span>
        </ListItem>
        <ListItem className="slds-is-incomplete" id={ path2Id } ariaControls={ pathContent2Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Open</span>
        </ListItem>
        <ListItem className="slds-is-incomplete" id={ path3Id } ariaControls={ pathContent3Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Unqualified</span>
        </ListItem>
        <ListItem className="slds-is-incomplete" id={ path4Id } ariaControls={ pathContent4Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Nurturing</span>
        </ListItem>
        <ListItem className="slds-is-lost" id={ path5Id } ariaControls={ pathContent5Id } role="tab" tabIndex="0">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Current Stage:</span>
          </span>
          <span className="slds-tabs--path__title">Closed Lost</span>
        </ListItem>
      </ListMain>
      <Action>Change Closed State</Action>
    </Path>
    <CoachContent id={ pathContent1Id } ariaLabelledby={ path1Id }>
      <h2>Path 1 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent2Id } ariaLabelledby={ path2Id }>
      <h2>Path 2 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent3Id } ariaLabelledby={ path3Id }>
      <h2>Path 3 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent4Id } ariaLabelledby={ path4Id }>
      <h2>Path 4 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent5Id } ariaLabelledby={ path5Id }>
      <h2>Path 5 Content</h2>
    </CoachContent>
  </Coach>;

let StateG = props =>
  <Coach>
    <Path>
      <Trigger />
      <ListMain listRole="tablist">
        <ListItem className="slds-is-complete" id={ path1Id } ariaControls={ pathContent1Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Contacted</span>
        </ListItem>
        <ListItem className="slds-is-complete" id={ path2Id } ariaControls={ pathContent2Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Open</span>
        </ListItem>
        <ListItem className="slds-is-complete" id={ path3Id } ariaControls={ pathContent3Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Unqualified</span>
        </ListItem>
        <ListItem className="slds-is-complete" id={ path4Id } ariaControls={ pathContent4Id } role="tab">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Nurturing</span>
        </ListItem>
        <ListItem className="slds-is-complete slds-is-won" id={ path5Id } ariaControls={ pathContent5Id } role="tab" tabIndex="0">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Current Stage:</span>
          </span>
          <span className="slds-tabs--path__title">Closed Won</span>
        </ListItem>
      </ListMain>
      <Action>Change Closed State</Action>
    </Path>
    <CoachContent id={ pathContent1Id } ariaLabelledby={ path1Id }>
      <h2>Path 1 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent2Id } ariaLabelledby={ path2Id }>
      <h2>Path 2 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent3Id } ariaLabelledby={ path3Id }>
      <h2>Path 3 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent4Id } ariaLabelledby={ path4Id }>
      <h2>Path 4 Content</h2>
    </CoachContent>
    <CoachContent id={ pathContent5Id } ariaLabelledby={ path5Id }>
      <h2>Path 5 Content</h2>
    </CoachContent>
  </Coach>;


///////////////////////////////////////////////
// Export
//////////////////////////////////////////////


export let states = [
  {
    id: 'without-coaching',
    label: 'Without Coaching',
    element: <StateA />
  },
  {
    id: 'with-coaching',
    label: 'With Coaching Available',
    element: <StateB />
  },
  {
    id: 'current-coaching',
    label: 'Current Stage Coaching Visible',
    element: <StateD />
  },
  {
    id: 'different-coaching',
    label: 'With Different Stage Selected',
    element: <StateE />
  },
  {
    id: 'lost',
    label: 'Lost',
    element: <StateF />
  },
  {
    id: 'won',
    label: 'Won',
    element: <StateG />
  }
];
