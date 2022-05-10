const ExplorerService = require("../services/ExplorerService");

class BotService {
    static getExplorersByMissionString(explorers, mission){
        return JSON.stringify(ExplorerService.filterByMission(explorers,mission));
    }
    
}

module.exports = BotService;