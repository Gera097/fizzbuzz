const ExplorerController = require("../../lib/controllers/ExplorerController")

describe("Unit test for class ExplorerController", () => {
    test("Prueba método getExplorersByMission", () => {
        const result = ExplorerController.getExplorersByMission("node")
        console.log(result)
        const result_java = ExplorerController.getExplorersByMission("java")
        console.log(result)
        expect(result_java.length).toBe(5)
    })
})