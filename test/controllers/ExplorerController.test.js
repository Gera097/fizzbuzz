const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit test for class ExplorerController", () => {
    test("Prueba método getExplorersByMission", () => {
        const result_java = ExplorerController.getExplorersByMission("java");
        expect(result_java.length).toBe(5);
    });

    test("Prueba método getExplorersUsernamesByMission", () => {
        const result = ExplorerController.getExplorersUsernamesByMission("node");
        expect(result.length).toBe(10);
    });

    test("Prueba método getAmountOfExplorersByMission", () => {
        const result = ExplorerController.getAmountOfExplorersByMission("java");
        expect(result).toBe(5);
    });
});