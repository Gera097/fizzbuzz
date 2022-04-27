const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Unit test for ExplorerService class", () => {

    test("Filter explorers by mission", () => {
        const explorers = [{mission: "node"}, {mission: "node"}, {mission: "java"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    }); 
    test("Get amount of explorers by mission", () => {
        const explorers = [{mission: "node"}, {mission: "node"}, {mission: "java"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(2);
    }); 
    test("Get explorers usernames by mission", () => {
        const explorers = [{mission: "node", "githubUsername": "ajolonauta1"}, {mission: "node", "githubUsername": "ajolonauta2"}, {mission: "java", "githubUsername": "ajolonauta3"}];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersInNode).toEqual(["ajolonauta1", "ajolonauta2"]);
    }); 
});
