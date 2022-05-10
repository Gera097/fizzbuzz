const BotService = require("../../lib/services/BotServices");

describe("Unit test for BotServices class", () => {
    test("Returning a String with the explorers in a mission", ()=> {
        const explorers = [{"mission": "node", "name": "Woopa1"}, {"mission": "node", "name": "Woopa2"}, {"mission": "java", "name": "Woopa3"}];
        const explorersInNode = BotService.getExplorersByMissionString(explorers,"node");

        expect(explorersInNode).toMatch("[{\"mission\":\"node\",\"name\":\"Woopa1\"},{\"mission\":\"node\",\"name\":\"Woopa2\"}]");
    });
});