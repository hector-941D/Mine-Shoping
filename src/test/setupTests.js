// src/test/setupTests.js
import matchers from '@testing-library/jasmine-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@testing-library/jasmine-dom';


beforeEach(() => {
    jasmine.getEnv().addMatchers(matchers.default.default);
});