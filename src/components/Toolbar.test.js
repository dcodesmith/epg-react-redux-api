import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar';

const onDeleteSpy = jest.fn();
const DEFAULT_PROPS = { onDelete: onDeleteSpy };

describe('Toolbar', () => {
  describe('Given a Toolbar component', () => {
    describe('When rendered', () => {
      let component, button;

      beforeAll(() => {
        component = shallow(<Toolbar { ...DEFAULT_PROPS } />);
        button = component.find('button');
      });

      it('should render the component', () => {
        expect(component.find('.programme-guide__toolbar')).toHaveLength(1);
      });

      it('should render a button', () => {
        expect(button).toHaveLength(1);
      });

      describe('And the button is clicked', () => {
        beforeAll(() => {
          button.simulate('click');
        });

        it('should invoke the `onDelete` function', () => {
          expect(onDeleteSpy).toHaveBeenCalled();
        });
      });
    });
  });
});
