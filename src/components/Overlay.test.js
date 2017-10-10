import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinonChai from 'sinon-chai';
import Modal from 'react-modal';

chai.use(sinonChai);

import Overlay from './Overlay';
import ProgrammeDetails from './ProgrammeDetails';

const onHideModalSpy = sinon.spy();
const modalProps = {
  isOpen: false, style: {}, contentLabel: 'A modal'
};

const DEFAULT_PROPS = { isOpen: false, onHideModal: onHideModalSpy, data: {} };

const render = (testProps = {}) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<Overlay { ...props } />);
};

describe('Overlay', () => {
  describe('Given a Overlay component', () => {
    describe('When rendered', () => {
      let component, button, modalComponent, programmeDetailsComponent;

      beforeEach(() => {
        component = render();
        modalComponent = component.find(Modal);
        programmeDetailsComponent = modalComponent.find(ProgrammeDetails);
        button = modalComponent.find('button');
      });

      it('should render a Modal component with the appropriate props', () => {
        expect(modalComponent.prop('isOpen')).to.be.false;
      });

      it('should render ProgrammeDetails with the approprate props as a child of the Modal Component', () => {
        expect(programmeDetailsComponent.prop('data')).to.eql(DEFAULT_PROPS.data);
      });

      describe('And the close CTA is clicked', () => {
        beforeAll(() => {
          button.simulate('click');
        });

        it('should invoke the onHideModal method', () => {
          expect(onHideModalSpy).to.have.been.calledOnce;
        });
      });
    });
  });
});
