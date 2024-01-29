// DFS
function valueInTree(tree, val) {
	if(tree[0] == val){
		return true;
	}
	if(tree[1] != null && valueInTree(tree[1], val)){
		return true;
	}
	if(tree[2] != null && valueInTree(tree[2], val)){
		return true;
	}
	return false;
}

// OR

function valueInTree(tree, val) {
	return tree.flat(Infinity).includes(val);
}