interface Config {
    url: string;
}

declare module "my-package" {
    function init(config: Config): boolean;
    function exit(code: number): number;
}