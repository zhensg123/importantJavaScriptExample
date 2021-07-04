<template>
  <div>
    <showCode :title="title" :code.sync="code"></showCode>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: `
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



		let BFSARR = [];
		// Breadth First Search 
		function BFS(obj) {
			let undo = [];
			if (obj === null || typeof obj !== "object") return;
			undo.unshift(obj);
			while (undo.length) {
				let item = undo.shift();
				Object.entries(item).map(([key, val]) => {
					BFSARR.push(key)
					undo.push(val);
				});
			};
			return BFSARR;
		}
		console.log(BFS(obj));

		let DFSARR = []
		// Depth First Search
		function DFS(obj) {
			newObj = obj
			if (obj === null || typeof obj !== "object") return;
			Object.entries(obj).map(([k, v], index) => {
				DFSARR.push(k);
				if (typeof v === "object") {
					DFS(v)
				}
			})
			return DFSARR;
		}
		console.log(DFS(obj), 'newObj');`,
      title: '对象的中序遍历和后序遍历'
    }
  },
  mounted () {
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
      }
      return BFSARR
    }
    console.log(BFS(obj))

    const arr = [
      {
        name: 'test',
        path: 'test',
        children: [
          {
            name: 'inner',
            path: 'inner',
            children: [
              {
                name: 'three',
                path: 'three',
                children: [
                  {
                    name: 'four',
                    path: 'four'
                  }
                ]
              }
            ]
          },
          {
            name: 'inner1',
            path: 'inner1',
            children: [
              {
                name: 'three1',
                path: 'three1',
                children: []
              }
            ]
          }
        ]
      }
    ]
    const DFSARR = []
    let isStop = false
    // Depth First Search
    function DFS (obj, path) {
      const temp = {}
      const arrs = Object.entries(obj)
      for (let i = 0; i < arrs.length; i++) {
        const [k, v] = arrs[i]
        temp[k] = v
        if (Array.isArray(v)) {
          DFSARR.push(temp)
          v.forEach((menu) => {
            DFS(menu, path)
          })
		  if(isStop){
			  break
		  }
        }
        if (v === path) {
          isStop = true
        }
      }
      return DFSARR
    }
    function findPath (path) {
      arr.forEach((menu) => {
        menu.children.forEach((menu) => {
           !isStop && DFS(menu, path)
        })
      })
      return DFSARR
    }

    console.log(findPath('three'), '222222')
  }
}
</script>
