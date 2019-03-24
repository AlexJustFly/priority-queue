class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {
			this.left = node;
		} else if (this.left != null && this.right == null) {
			this.right = node;
		} else {
			return;
		}
		node.parent = this;
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
		} else if (this.right == node) {
			this.right = null;
		} else {
			throw 'error'
		}
		node.parent = null;
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this)
		} else {
			return;
		}
	}

	swapWithParent() {
		let arr = [];
		if (!this.parent) {
			return;
		} else {
/*			arr.push(this.data);
			arr.push(this.priority);
			arr.push(this.parent.data);
			arr.push(this.parent.priority);
			this.data = arr[2];
			this.priority = arr[3];
			this.parent.data = arr[0];
			this.parent.priority = arr[1]; 

*/
		}
/*		
		
		let dp = this.parent.data;
		let pp = this.parent.priority;
		if (this.parent) {
			this.data = dp;
			this.priority = pp;
			this.parent.data = d;
			this.parent.priority = p;			
		} else {
			return;
		}*/
	}
}

module.exports = Node;
