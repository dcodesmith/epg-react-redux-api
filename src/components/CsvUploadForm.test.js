import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import CsvUploadForm from './CsvUploadForm';

const onFileChange = sinon.spy();
const onUploadSpy = sinon.spy();

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

describe('CsvUploadForm', () => {
  describe('Given an Upload CSV Form Component', () => {
    describe('When the component is rendered', () => {
      let component, form;

      beforeEach(() => {
        component = render(testProps);
        form = component.find('form');
      });

      it('should have a form', () => {
        expect(form.length).to.equal(1);
      });

      it('should have an input field with the appropriate props', () => {
        const { onChange, accept, type } = form.find('input').props();

        expect(onChange).to.equal(DEFAULT_PROPS.onFileChange);
        expect(type).to.equal('file');
        expect(accept).to.equal('.csv');
      });

      it('should have a label with value `Text`', () => {
        expect(form.find('label').find('span').text()).to.equal('Text');
      });

      it('should have a button with the appropriate props', () => {
        const { disabled, onClick, type } = form.find('button').props();

        expect(disabled).to.be.false;
        expect(type).to.equal('Submit');
        expect(onClick).to.equal(DEFAULT_PROPS.onUpload);
      });

      describe('AND a file selected', () => {
        beforeAll(() => {
          form.find('input').simulate('change');
        });

        afterAll(() => {
          onFileChange.reset();
        });

        it('should call `onFileChange()` once', () => {
          expect(onFileChange).to.be.calledOnce;
        });

        describe('WHEN the form is submitted', () => {
          beforeAll(() => {
            onUploadSpy.reset();
            form.find('button').simulate('click');
          });

          it('should call `onUpload()` once', () => {
            expect(onUploadSpy).to.be.calledOnce;
          });
        });
      });

      describe('AND a CSV file is being uploaded', () => {
        beforeAll(() => {
          testProps.isUploading = true;
        });

        it('should have a disabled Submit button', () => {
          expect(form.find('button').prop('disabled')).to.be.true;
        });

        describe('WHEN the form is submitted', () => {
          beforeAll(() => {
            form.find('button').simulate('click');
            onUploadSpy.reset();
          });

          it('should NOT call `onUpload()`', () => {
            expect(onUploadSpy).to.not.be.called;
          });
        });
      });
    });
  });
});
