import { createCustomElement, actionTypes } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import tailwindStyles from './../tailwind-generated.scss'; // Toto vzniklo buildem
import ReactDOM from 'react-dom';
import React from 'react';
import retargetEvents from 'react-shadow-dom-retarget-events';

// Lifecycle action handlers
const { COMPONENT_BOOTSTRAPPED, COMPONENT_PROPERTY_CHANGED } = actionTypes;

// Selector of div where the React app will be rendered
const REACT_QUERY_SELECTOR = 'react-root-generated'

// React bridge
import {ReactBridge} from './ReactBridge';

// Error boundary in case somethign went wrong with the React components inside
import { ReactErrorBoundary } from './ReactErrorBoundary';

const loadGoogleFonts = () => {
    const fontId = 'my-google-fonts';
    if (document.getElementById(fontId)) return;

    const link = document.createElement('link');
    link.id = fontId;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:wght@400;700&family=Bangers&family=Comic+Neue:wght@400;700&display=swap';
    document.head.appendChild(link);
};

loadGoogleFonts()

/**
 * Helper function for rendering root React component
 */
const renderReact = (host, properties, dispatch) => {
    const container = host.shadowRoot.querySelector(`#${REACT_QUERY_SELECTOR}`);
    
    if (!container) return; 

	const genericDispatch = (eventName, payload) => {
        dispatch(eventName, payload);
    }

    ReactDOM.render(
        React.createElement(
            ReactErrorBoundary, 
            null,
            React.createElement(ReactBridge, { ...properties, dispatch: genericDispatch })
        ), 
        container
    )

};

createCustomElement('x-513106-ui-framework-react-wrapper', {
	renderer: {type: snabbdom},
	view: () => null,
	styles: `
        ${tailwindStyles} 
        ${styles}
        :host {
            display: block;
            width: 100%;
            height: 100%;
        }
    `,
	properties: {
		name: { default: 'Jan'}
	},
	events: {},
	actionHandlers: {
		[COMPONENT_BOOTSTRAPPED]: {
			effect({ host, properties, dispatch }) {
                const container = document.createElement('div');
                container.id = REACT_QUERY_SELECTOR;
                //container.style.height = '100%';
                host.shadowRoot.appendChild(container);

                setTimeout(() => {
                    renderReact(host, properties, dispatch);
					retargetEvents(host.shadowRoot);
                }, 50);
            }
		},
		[COMPONENT_PROPERTY_CHANGED]: {
            effect({ host, properties, dispatch }) {
                renderReact(host, properties, dispatch);
            }
        }
	}
});

