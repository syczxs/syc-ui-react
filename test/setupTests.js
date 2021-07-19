const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-17-updated')

const jsdom =  require('jsdom');

const { JSDOM } = jsdom;
const { window } = new JSDOM('');
const { document } = (new JSDOM(``)).window;

global.document = document;
global.window = window;

enzyme.configure({adapter: new Adapter()})