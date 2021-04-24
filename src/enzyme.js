import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Enzyme requires configuration

configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;
