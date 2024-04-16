import { f as fabric } from './fabric-30fd9c9c.js';
import { cj as FixtureInstance, ck as merge } from './main-942c0e56.js';
import './preload-helper-a4975f27.js';

class ExportTimestampFixture extends FixtureInstance {
  get config() {
    const fixtureConfig = this.$iApi.fixture.get("export").config;
    return fixtureConfig?.timestamp;
  }
  make(options) {
    const timestampFixtureConfig = this.config;
    const fabricTextConfig = {
      text: (/* @__PURE__ */ new Date()).toLocaleString("en-CA"),
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 20,
      top: 0,
      left: 0,
      originX: "left"
    };
    if (timestampFixtureConfig?.value !== void 0) {
      fabricTextConfig.text = timestampFixtureConfig.value;
    }
    const config = merge(fabricTextConfig, options || {});
    const fbTimestamp = new fabric.fabric.Textbox(config.text, config);
    return Promise.resolve(fbTimestamp);
  }
}

export { ExportTimestampFixture as default };
