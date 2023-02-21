import { Stat } from "./StatType";

enum ArtifactType {
    UNDEFINED = "UNDEFINED",
    FLOWER    = "FLOWER",
    PLUME     = "PLUME",
    SANDS     = "SANDS",
    GOBLET    = "GOBLET",
    CIRCLET   = "CIRCLET",
}

class Artifact {
    id: number;
    type: ArtifactType;
    level: number;
    mainStat: Stat;
    subStats: Stat[];
    constructor() {
        this.id = 0;
        this.type = ArtifactType.UNDEFINED;
        this.level = 0;
        this.mainStat = new Stat();
        this.subStats = [];
    }
}

export {
    Artifact,
    ArtifactType
}
