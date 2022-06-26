/*
 * @Author: lijian
 * @since: 2022-06-23 15:18:34
 * @lastTime: 2022-06-23 16:43:37
 * @LastAuthor: lijian
 * @message:
 */
/**
 * @description: [1,null,2,3]
 * @return {*} 定义为二叉树
 */
const tree = {
  val: 1,
  left: {
    val: 4,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
}

/**
 * @description: 中序遍历  左 根 右
 * @param {*} root
 * @param {*} array
 * @return {*}
 */
const inorderTraversalCenter = (root, array = []) => {
  if (root) {
    inorderTraversalCenter(root.left, array)
    array.push(root.val)
    inorderTraversalCenter(root.right, array)
  }
  return array
}
console.log(inorderTraversalCenter(tree))

/**
 * @description: 前序遍历   根 左 右
 * @param {*} root
 * @param {*} array
 * @return {*}
 */
const inorderTraversalLeft = (root, array = []) => {
  if (root) {
    array.push(root.val)
    inorderTraversalLeft(root.left, array)
    inorderTraversalLeft(root.right, array)
  }
  return array
}
console.log(inorderTraversalLeft(tree))

/**
 * @description: 后序遍历  左 右 根
 * @param {*} root
 * @param {*} array
 * @return {*}
 */
const inorderTraversalRight = (root, array = []) => {
  if (root) {
    inorderTraversalRight(root.left, array)
    inorderTraversalRight(root.right, array)
    array.push(root.val)
  }
  return array
}
console.log(inorderTraversalRight(tree))
