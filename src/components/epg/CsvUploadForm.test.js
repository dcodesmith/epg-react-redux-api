import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CsvUploadForm from './CsvUploadForm';

describe('CsvUploadForm', () => {

  describe('Given ...', () => {

    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = {};
        component = shallow(<CsvUploadForm {...props} />);
      });

      it('should ....', () => {
        console.log(component.html());
      });

    });
  });
});
