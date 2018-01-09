import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Grid from './Grid';
import Header from './Header';
import Body from './Body';
import Controls from './Controls';

import ToolbarContainer from '../containers/ToolbarContainer';

const DEFAULT_PROPS = {
  programmes: {},
  offset: 0,
  onNavigate: sinon.spy(),
  times: [],
  transformStyle: {},
  onShowModal: sinon.spy()
};

const render = (testProps = {}) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<Grid {...props} />);
};

describe('Grid', () => {
  describe('Given a Grid component', () => {
    describe('When rendered', () => {
      let component;

      beforeAll(() => {
        component = render();
      });

      it('should render a Header component with the correct props', () => {
        const headerComponent = component.find(Header);
        const { times, transformStyle } = headerComponent.props();

        expect(times).to.eql(DEFAULT_PROPS.times);
        expect(transformStyle).to.eql(DEFAULT_PROPS.transformStyle);
      });

      it('should render a Body component with the correct props', () => {
        const bodyComponent = component.find(Body);
        const { programmes, transformStyle, onModalShow } = bodyComponent.props();

        expect(programmes).to.eql(DEFAULT_PROPS.programmes);
        expect(transformStyle).to.eql(DEFAULT_PROPS.transformStyle);
        expect(onModalShow).to.equal(DEFAULT_PROPS.onShowModal);
      });

      it('should render a Controls component with the correct props', () => {
        const controlsComponent = component.find(Controls);
        const { onNavigate, times, offset } = controlsComponent.props();

        expect(onNavigate).to.equal(DEFAULT_PROPS.onNavigate);
        expect(times).to.eql(DEFAULT_PROPS.times);
        expect(offset).to.equal(DEFAULT_PROPS.offset);
      });

      it('should render a Toolbar Container component', () => {
        const toolbarContainerComponent = component.find(ToolbarContainer);

        expect(toolbarContainerComponent).to.have.lengthOf(1);
      });
    });
  });
});
