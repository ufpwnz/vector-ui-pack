# Vector UI Pack (`vector-ui-pack`)

A lightweight, pre-compiled binary asset bundle containing vector glyphs, path definitions, and texture atlases designed for high-performance Canvas and WebGL 2D renderers.

## Features
- **Zero Dependencies**: Pure binary data structure for rapid deserialization.
- **Pre-Packed Binary Format**: Assets are packed into a contiguous `assets.bin` binary buffer.
- **Low Memory Overhead**: Direct buffer slice support with no runtime JSON parsing cost.

## Installation

```bash
npm install vector-ui-pack
```

## Quick Start

```javascript
const assetPack = require("vector-ui-pack");

// Initialize and load binary buffer
assetPack.load();

console.log(`Loaded ${assetPack.getSize()} bytes of binary UI data.`);
```

## Assets Included
- Vector shapes and outline contours (`assets.bin`)
- High-dpi resolution scaling offsets
- Compact curve coordinate tables

## License
MIT License. Free for commercial and non-commercial use.
