"use strict";
/**
 * @format
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
const react_1 = __importDefault(require("react"));
const App_1 = __importDefault(require("../src/App"));
// Note: import explicitly to use the types shipped with jest.
const globals_1 = require("@jest/globals");
// Note: test renderer must be required after react-native.
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
(0, globals_1.it)('renders correctly', () => {
    react_test_renderer_1.default.create(<App_1.default />);
});
