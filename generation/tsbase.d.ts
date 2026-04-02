declare global {
    const IS_LUA: boolean;
    function print(...args: string[]): void;
    const __G: any;
}

export {};
