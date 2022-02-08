class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a, b) =>
      a - b
    );
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error('OutOfBounds');
    } else {
    return  this.items[pos];
    }
    
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    this.itmes = this.items.sort();
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
      sum += this.items[i];
    }
    if (this.length === 0) {
      return 0;
    }
    return sum;
  }

  avg() {
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
      sum += this.items[i];
    }
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return sum / this.length;
  }
}

module.exports = SortedList;
