declare var module: {
    hot: {
        accept(path:string, callback:() => void): void;
        dispose(callback: (Object) => void): void;
    };
};

declare var require: any;