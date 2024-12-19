import '@babel/register';
import { JSDOM } from 'jsdom';

// Configurer un DOM global avant chaque test
beforeEach(function() {
  const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body><h1>Hello, Mocha!</h1></body></html>`);
  global.document = dom.window.document;
  global.window = dom.window;
  global.navigator = dom.window.navigator;
});