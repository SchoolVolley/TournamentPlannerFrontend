export interface DataMatch {
    id:            number;
    teamA:         DataTeamSmall;
    teamB:         DataTeamSmall;
    field:         DataField;
    sets:          DataSet[];
    expectedStart: Date;
    actualStart:   null;
    actualEnd:     Date | null;
}

export interface DataField {
    id:         number;
    name:       DataMatch;
    tournament: DataMatch;
}

export enum DataName {
    FieldA = "FieldA",
    FieldB = "FieldB",
}

export interface DataTeamSmall {
    id:   number;
    name: string;
}

export interface DataSet {
    id:       number;
    winner:   DataTeamSmall | null;
    looser:   DataTeamSmall | null;
    apoints:  number | null;
    finished: boolean;
    bpoints:  number | null;
}
