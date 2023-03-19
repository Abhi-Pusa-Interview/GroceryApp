import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./List";

const data = [{
    name: "name1",
},{
    name: "name2"
},{
    name: "name3"
}];


const MainComponent = () => {
    return(<div data-testid="main-id"></div>)
}

test("render the list of component passed",() => {
    const listDom = render(<List data={data} Child={MainComponent} />)
    expect(listDom.getAllByTestId("main-id").length).toEqual(3);
});