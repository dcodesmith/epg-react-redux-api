import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';

import Overlay from './Overlay';

const onHideModalSpy = jest.fn();
const modalProps = {
  isOpen: false,
  style: {},
  contentLabel: 'A modal'
};
const DEFAULT_PROPS = {
  isOpen: false,
  onHideModal: onHideModalSpy,
  data: {}
};

describe('Given a Overlay component', () => {
  describe('When rendered', () => {
    let component, button, modalComponent, programmeDetailsComponent;

    beforeEach(() => {
      component = shallow(<Overlay { ...DEFAULT_PROPS } />);
      modalComponent = component.find(Modal);
      programmeDetailsComponent = modalComponent.find('ProgrammeDetails');
      button = modalComponent.find('button');
    });

    it('should render a Modal component with the appropriate props', () => {
      expect(modalComponent.prop('isOpen')).toBeFalsy();
    });

    it('should render ProgrammeDetails with the approprate props as a child of the Modal Component', () => {
      expect(programmeDetailsComponent.prop('data')).toEqual(DEFAULT_PROPS.data);
    });

    describe('And the close CTA is clicked', () => {
      beforeAll(() => {
        button.simulate('click');
      });

      it('should invoke the onHideModal method', () => {
        expect(onHideModalSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
