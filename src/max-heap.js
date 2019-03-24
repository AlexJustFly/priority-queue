const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		this.parentNodes.push({'data': data, 'priority': priority});
	}

	pop() {
		if (this.parentNodes == 0) {
			return;
		} else {
			let d = this.parentNodes.pop();
			return d.data;
		}
	}

	detachRoot() {
		let result = this.parentNodes[0];
		this.root = null;
		//let size = this.parentNodes.length;
		//let result = this.parentNodes[0];
		//this.parentNodes[0] = this.parentNodes[size];
		//this.shiftNodeDown(this.parentNodes[0]);
		return result;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		if (this.parentNodes != 0) {
			return false;
		} else {
			return true;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.parentNodes.length == 0) {
			this.root = node;
		} else {
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {
		node > 1 // прверяем, что индекс больше 1
		h[parent[node]] < h[node] // проверяем, что куча нарушена. Родитель меньше одного из сыновей
		let parent = h[parent[node]]
		let hnode = h[node];
		h[parent[node]] = hnode; // меняем местами родителя и сына
		h[node] = parent; // меняем местами родителя и сына
		node = parent[node] // присваиваем проверяемое значение и продолжаем дальше
	}

	shiftNodeDown(node) {
		let maxIndex = node;
		let l = leftChild[i];
		if (l <= size && h[l] > h[maxIndex]) { // если он есть в куче и если значение больше чем наше текущее
			maxIndex = l;
		}
		let r = rightChild[i];
		if (r <= size && h[r] > h[maxIndex]) { // если он есть в куче и если значение больше чем наше текущее
			maxIndex = r;
		}
		if (node != maxIndex) {
			let h = h[node];
			let hm = h[maxIndex];
			h[node] = hm;
			h[maxIndex] = h;
		}
		shiftNodeDown(maxIndex);
	}
}

module.exports = MaxHeap;
