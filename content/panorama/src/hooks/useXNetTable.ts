import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { LocalEvent } from '../def/local_event_def';
import { onLocalEvent, useLocalEvent } from '../utils/event-bus';
import useStateIfMounted from './useStateIfMounted';

/**
 *Similar to useGameEvent, but its data will be cached
 *
 *Note that the callback parameters of this hook need to be consistent, otherwise the event will be registered repeatedly.
 *It is best to use React.useCallback package
 *
 *@export
 *@template T
 *@template K
 *@param {T} table_name
 *@param {K} key
 *@param {(data: XNetTableDefinitions[T][K]) => void} callback
 */
export function useXNetTableEvent<TABLE_NAME extends keyof XNetTableDefinitions, T extends XNetTableDefinitions[TABLE_NAME], KEY extends keyof T>(
    table_name: TABLE_NAME,
    key: KEY,
    callback: (data: T[KEY]) => void
) {
    const _callback = React.useCallback(
        (data: LocalEvent['x_net_table']) => {
            if (data.table_name.toString() === table_name && data.key.toString() === key) {
                callback(data.content);
                GameUI.CustomUIConfig().__x_nettable_cache__[<string>table_name][<string>key] = data.content;
            }
        },
        [callback, key, table_name]
    );
    useLocalEvent(`x_net_table`, _callback);
}

/**
 *When the data in x_net_table changes, a callback will be triggered
 *
 *Note: *This is not a hook function, don't use it in function components*
 *
 *@export
 *@template T
 *@template K
 *@param {T} table_name
 *@param {K} key
 *@param {(data: XNetTableDefinitions[T][K]) => void} callback
 */
export function onXNetTableEvent<TABLE_NAME extends keyof XNetTableDefinitions, T extends XNetTableDefinitions[TABLE_NAME], KEY extends keyof T>(
    table_name: TABLE_NAME,
    key: KEY,
    callback: (data: T[KEY]) => void
) {
    onLocalEvent(`x_net_table`, data => {
        if (data.table_name.toString() === table_name && data.key.toString() === key) {
            callback(data.content);
        }
    });
}

/**
 *Hook callback listening for netlist changes
 *@export
 *@template T
 *@template KEY
 *@param {T} table_name table name
 *@param {KEY} key table key
 *@param {XNetTableDefinitions[T][KEY]} fail_safe_value If the netlist does not contain this value, then the value must be returned. This item must be to avoid react rendering errors
 */
export function useXNetTableKey<TABLE_NAME extends keyof XNetTableDefinitions, T extends XNetTableDefinitions[TABLE_NAME], KEY extends keyof T>(
    table_name: TABLE_NAME,
    key: KEY,
    fail_safe_value: T[KEY]
): T[KEY] {
    GameUI.CustomUIConfig().__x_nettable_cache__ ??= {};
    GameUI.CustomUIConfig().__x_nettable_cache__[table_name] ??= {};
    const current_value = GameUI.CustomUIConfig().__x_nettable_cache__[<string>table_name][<string>key]; //This cache set is performed in dispatcher.ts

    const [value, setValue] = useStateIfMounted<T[KEY]>(current_value ?? fail_safe_value);

    const callback = React.useCallback(
        data => {
            if (data.table_name.toString() === table_name && data.key.toString() === key) {
                setValue(data.content);
            }
        },
        [table_name, key, setValue]
    );

    useLocalEvent(`x_net_table`, callback);

    return value;
}
