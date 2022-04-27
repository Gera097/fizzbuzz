class ExplorerService {
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission).length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInMission = this.filterByMission(explorers, mission);

        return explorersInMission.map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService;