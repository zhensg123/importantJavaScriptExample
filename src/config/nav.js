
var obj = {
  a: {
    b: {
      d: {
        f: 22
      }
    },
    c: {
      e: {
        g: 33
      }
    }
  }
}

const BFSARR = []
// Breadth First Search
function BFS (obj) {
  const undo = []
  if (obj === null || typeof obj !== 'object') return
  undo.unshift(obj)
  while (undo.length) {
    const item = undo.shift()
    Object.entries(item).map(([key, val]) => {
      BFSARR.push(key)
      undo.push(val)
    })
  };
  return BFSARR
}
console.log(BFS(obj))

const DFSARR = []
// Depth First Search
function DFS (obj) {
  if (obj === null || typeof obj !== 'object') return
  Object.entries(obj).map(([k, v], index) => {
    DFSARR.push(k)
    if (typeof v === 'object') {
      DFS(v)
    }
  })
  return DFSARR
}
console.log(DFS(obj), 'newObj')
