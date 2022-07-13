class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
   constructor() {
        this.root = null;
   }

    insert(val, root = this.root) {
        let newNode = new TreeNode(val);
    
        if(!this.root) {                // if there's no root 
            this.root = newNode;        // make new node the root
        } else {
            if(val < root.val) {        // if the value is less than root val
                if(!root.left) {        // put it left of root
                    root.left = newNode;
                } else {
                    this.insert(val, root.left);
                }
            } else {                    // if the value is >= root val
                if(!root.right) {       // put it right of root
                    root.right = newNode;
                } else {
                    this.insert(val, root.right);
                }
            }
        }
    }

    searchRecur(val, root = this.root) {
        if(!root) return false;
        
        if(root.val === val) {
            return true;
        } else if(val < root.val) {
            return this.searchRecur(val, root.left);
        } else {
            return this.searchRecur(val, root.right);
        }
    }

    searchIter(val, root = this.root) {
        if(!root) return false;

        let tempRoot = root;
        while(tempRoot) {               // stop searching when no more nodes to search
            if(tempRoot.val === val) return true;

            if(val < tempRoot.val) {    // search left of root
                tempRoot = tempRoot.left;
            } else {                    // search right of root
                tempRoot = tempRoot.right;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};


        //         10
        //     5       16
        // 1       7       16