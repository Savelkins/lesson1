
const num1 = 5;
const num2 = 8;
const mult = (n1, n2) => n1 * n2;
console.log("hi");
console.log(mult(3, 2));
// Очистить терминал - CTRL + L || clear

class Article {
  constructor(content) {
    this.content = content;
  }
  render() {
    return this.content;
  }
}
const newArticle = new Article("Content for article!");
console.log(newArticle.render())