let wasm;

WebAssembly.instantiateStreaming(fetch('./add.wasm')).then(obj => {
    wasm = obj;
    console.log('done', obj);
})

self.addEventListener("message", (event) => {
    const result = wasm.instance.exports.add(event.data, 1);
    postMessage(result);
})