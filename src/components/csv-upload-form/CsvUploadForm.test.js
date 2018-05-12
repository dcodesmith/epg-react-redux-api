import React from 'react';
import { shallow } from 'enzyme';

import CsvUploadForm from './CsvUploadForm';

const onFileChange = jest.fn();
const onUploadSpy = jest.fn();

const DEFAULT_PROPS = {
  onFileChange,
  onUpload: onUploadSpy,
  isUploading: false,
  label: 'Text'
};

const render = (testProps) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<CsvUploadForm {...props} />);
};

const testProps = {};

describe('Given an Upload CSV Form Component', () => {
  describe('When rendered', () => {
    let component, form;

    beforeEach(() => {
      const props = { ...DEFAULT_PROPS, ...testProps };

      component = shallow(<CsvUploadForm {...props} />);
      form = component.find('form');
    });

    it('should have a form', () => {
      expect(form).toHaveLength(1);
    });

    it('should have an input field with the appropriate props', () => {
      const { onChange, accept, type } = form.find('input').props();

      expect(onChange).toEqual(DEFAULT_PROPS.onFileChange);
      expect(type).toEqual('file');
      expect(accept).toEqual('.csv');
    });

    it('should have a label with value `Text`', () => {
      expect(form.find('label').find('span').text()).toEqual('Text');
    });

    it('should have a button with the appropriate props', () => {
      const { disabled, onClick, type } = form.find('button').props();

      expect(disabled).toBeFalsy();
      expect(type).toEqual('Submit');
      expect(onClick).toEqual(DEFAULT_PROPS.onUpload);
    });

    describe('AND a file selected', () => {
      beforeAll(() => {
        form.find('input').simulate('change');
      });

      afterAll(() => {
        onFileChange.mockReset();
      });

      it('should call `onFileChange()` once', () => {
        expect(onFileChange).toHaveBeenCalledTimes(1);
      });

      describe('And the form is submitted', () => {
        beforeAll(() => {
          // onUploadSpy.mockReset();
          form.find('button').simulate('click');
        });

        it('should call `onUpload()` once', () => {
          expect(onUploadSpy).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('AND a CSV file is being uploaded', () => {
      beforeAll(() => {
        testProps.isUploading = true;
      });

      it('should have a disabled Submit button', () => {
        expect(form.find('button').prop('disabled')).toBeTruthy();
      });

      // TODO: :(
      describe.skip('And the form is submitted', () => {
        beforeAll(() => {
          onUploadSpy.mockReset();
          form.find('button').simulate('click');
        });

        it('should NOT call `onUpload()`', () => {
          expect(onUploadSpy).not.toHaveBeenCalled();
        });
      });
    });
  });
});
