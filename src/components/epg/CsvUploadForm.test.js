import React from 'react';
import sinon from 'sinon';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import CsvUploadForm from './CsvUploadForm';

const onFileChange = sinon.spy();
const onUpload = sinon.spy();
let component;

function render(isUploading = false, label = 'Text') {
  let props = { onUpload, isUploading, label, onFileChange };

  return mount(<CsvUploadForm {...props} />);
}

describe.only('CsvUploadForm', () => {

  describe('Given an Upload CSV Form Component', () => {

    describe('When the component is rendered', () => {
      let form;

      before(() => {
        component = render();
        form = component.find('form');
      });

      it('should have a form', () => {
        expect(form.length).toEqual(1);
      });

      it('should have an input field of type file', () => {
        expect(form.find('input').prop('type')).toEqual('file');
      });

      it('should have a label with value `Text`', () => {
        expect(form.find('label').find('span').text()).toEqual('Text');
      });

      it('should have a button of type Submit', () => {
        expect(form.find('button').prop('type')).toEqual('Submit');
      });

      it('should have an active Submit button', () => {
        expect(form.find('button').prop('disabled')).toBe(false);
      });

      describe('AND a file selected', () => {
        before(() => {
          form.find('input').simulate('change');
        });

        after(() => {
          onFileChange.reset();
        });

        it('should call `onFileChange()` once', () => {
          expect(onFileChange.callCount).toEqual(1);
          expect(onFileChange.calledOnce).toEqual(true);
        });

        describe('WHEN the form is submitted', () => {
          before(() => {
            form.find('button').simulate('click');
          });

          after(() => {
            onUpload.reset();
          });

          it('should call `onUpload()` once', () => {
            expect(onUpload.callCount).toEqual(1);
            expect(onUpload.calledOnce).toEqual(true);
          });
        });
      });


      describe('AND a CSV file is being uploaded', () => {
        let form;
        let uploading = true;

        before(() => {
          component = render(uploading);
          form = component.find('form');
        });

        it('should have a disabled Submit button', () => {
          expect(form.find('button').prop('disabled')).toBe(true);
        });

        describe('WHEN the form is submitted', () => {
          before(() => {
            form.find('button').simulate('click');
          });

          after(() => {
            onUpload.reset();
          });

          it('should NOT call `onUpload()`', () => {
            expect(onUpload.callCount).toEqual(0);
            expect(onUpload.calledOnce).toEqual(false);
          });
        });
      });
    });
  });
});
