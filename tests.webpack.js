import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

// All JavaScript test files
const context = require.context("./src", true, /.test.unit\.js$/); //make sure you have your directory and regex test set correctly!

context.keys().forEach(context);