const root = document.getElementById('root');

function createElement(elem, container) {
  const element = document.createElement(elem.type);
  element.innerHTML = elem.textContent;

  for (const key in elem.props) {
    element.setAttribute(key, elem.props[key]);
  }

  container.append(element);
}

function createDiv(elem, container) {
  const element = document.createElement(elem.type);
  element.innerHTML = elem.textContent;

  for (const key in elem.styles) {
    element.style[key] = elem.styles[key];
  }

  container.append(element);
}

const elem = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  textContent: 'Click me to go to google.com',
};
const elem1 = {
  type: 'div',
  styles: {
    width: '300px',
    height: '150px',
    backgroundColor: 'coral',
  },
  textContent: 'Dynamic Div with Styles!',
};

const newdiv = {
  type: 'p',
  props: {
    class: 'para',
    id: 'para',
  },
  textContent: 'Hi I am Paragraph',
};
function createPara(para, root) {
  const elem = document.createElement(para.type);
  elem.textContent = para.textContent;

  for (const key in para.props) {
    elem.setAttribute(key, para.props[key]);
  }
  root.append(elem);
}

createPara(newdiv, root);

createDiv(elem1, root);

createElement(elem, root);
