/**
 * 使用event-bus发送的事件在此处声明
 * @export
 * @interface LocalEvent
 */
export interface LocalEvent {
    // 收到网表更新事件
    x_net_table: {
        table_name: string;
        key: string;
        content: any;
    };
    talent_button_pressed: { player_id: PlayerID };
    custom_selected_unit: {
        unit: EntityIndex | null;
        player: PlayerID;
        hero: EntityIndex | null;
    };
    player_dead: {
        player_id: PlayerID;
        is_dead: boolean;
        dead_timer: number;
    };
    player_respawn_timer: {
        player_id: PlayerID;
        is_dead: boolean;
        dead_timer: number;
    };
}
