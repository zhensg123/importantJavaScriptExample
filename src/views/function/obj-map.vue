<template>
  <div>
    <showCode :title="title" :code.sync="code"></showCode>
  </div>
</template>
<script>
export default {
  data () {
    return {
      test: '',
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
      if (obj === null || typeof obj !== 'object') return
      const undo = [obj]
      while (undo.length) {
        const item = undo.shift()
        Object.entries(item).forEach(([key, val]) => {
          BFSARR.push(key)
          undo.push(val)
        })
      }
      return BFSARR
    }
    console.log(BFS(obj), '广度优先遍历')

    const DFSARR = []
    // Depth First Search
    function DFS (obj) {
      if (obj === null || typeof obj !== 'object') return
      Object.entries(obj).forEach(([k, v]) => {
        DFSARR.push(k)
        DFS(v)
      })
      return DFSARR
    }
    console.log(DFS(obj), 'newObj')
  }
}
</script>
