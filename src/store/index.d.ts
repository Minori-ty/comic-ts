declare const _default: import("pinia").StoreDefinition<"main", {
    count: number;
    url: string;
}, {
    double(state: {
        count: number;
        url: string;
    } & {}): number;
}, {
    add(): void;
    get(): Promise<void>;
}>;
export default _default;
