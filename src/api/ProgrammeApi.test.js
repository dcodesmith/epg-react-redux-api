import sinon from 'sinon';
import { expect } from 'chai';

import ProgrammeApi from './ProgrammeApi';

describe.skip('ProgrammeApi', () => {
  // beforeEach(() => {});
  describe('Given a programme', () => {
    describe('When it is created', () => {
      before(() => {
        ProgrammeApi.create({});
      });

      it('should invoked fetch', () => {

      });
    });
  });

  describe('Given a query', () => {
    describe('When read', () => {
      before(() => {
        ProgrammeApi.readAll({});
      });

      it('should invoked fetch', () => {

      });
    });
  });

  describe('Given a data', () => {
    describe('When delete', () => {
      before(() => {
        ProgrammeApi.delete({});
      });

      it('should invoked fetch', () => {

      });
    });
  });
});
