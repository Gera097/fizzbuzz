const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Unit test for ExplorerService class", () => {

    test("Filter explorers by mission", () => {
        const explorers = [{mission: "node"}, {mission: "node"}, {mission: "java"}]
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(2);
    }) 
})
