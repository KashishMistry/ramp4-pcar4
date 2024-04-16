import { f as fabric } from './fabric-30fd9c9c.js';
import { cj as FixtureInstance, ck as merge } from './main-942c0e56.js';
import './preload-helper-a4975f27.js';

class ExportFootnoteFixture extends FixtureInstance {
  get config() {
    const fixtureConfig = this.$iApi.fixture.get("export").config;
    return fixtureConfig?.footnote;
  }
  make(options) {
    const footnoteFixtureConfig = this.config;
    const fabricTextConfig = {
      text: "RAMP-PCAR",
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 20,
      top: 0
    };
    if (footnoteFixtureConfig?.value !== void 0) {
      fabricTextConfig.text = footnoteFixtureConfig.value;
    }
    const config = merge(fabricTextConfig, options || {});
    const fbFootnote = new fabric.fabric.Textbox(config.text, config);
    return Promise.resolve(fbFootnote);
  }
}

export { ExportFootnoteFixture as default };
