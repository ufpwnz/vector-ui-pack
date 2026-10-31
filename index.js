const fs = require("fs");
const path = require("path");

const ASSET_PATH = path.join(__dirname, "assets.bin");

/**
 * High-performance binary asset loader for UI glyphs and vector curves.
 */
class VectorAssetPack {
    constructor() {
        this.loaded = false;
        this.buffer = null;
    }

    load() {
        if (this.loaded) return this;
        if (!fs.existsSync(ASSET_PATH)) {
            throw new Error(`[vector-ui-pack] Missing asset bundle at ${ASSET_PATH}`);
        }
        this.buffer = fs.readFileSync(ASSET_PATH);
        this.loaded = true;
        return this;
    }

    getSize() {
        return this.buffer ? this.buffer.length : 0;
    }

    sliceChunk(offset, length) {
        if (!this.loaded) this.load();
        return this.buffer.subarray(offset, offset + length);
    }
}

module.exports = new VectorAssetPack();

if (require.main === module) {
    const pack = new VectorAssetPack();
    pack.load();
    console.log(`[vector-ui-pack] Successfully initialized asset pack (${(pack.getSize() / 1024).toFixed(1)} KB loaded).`);
}
