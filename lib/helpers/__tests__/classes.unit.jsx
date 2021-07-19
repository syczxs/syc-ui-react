import classes from "../classes"

describe("classes", () => {
    it("接受一个classname", () => {
        const result = classes('a')
        expect (result).toEqual("a")


    })
})