declare interface XNetTableDefinitions {
 
    settings: {
        basicSettings: BasicSettings;
    };

}

declare interface BasicSettings {}

//The following is used internally in the library, do not move
declare interface CustomGameEventDeclarations {
    x_net_table: {
        data:
            | string //Or a block of data sent as a string
            | XNetTableObject; //Or data sent at one time
    };
}

declare interface XNetTableObject {
    table_name: string;
    key: string;
    content: any;
}

declare interface XNetTableDataJSON {
    table: string;
    key: string;
    value: any;
}
