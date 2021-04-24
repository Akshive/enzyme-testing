import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Enzyme requires configuration

configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;
