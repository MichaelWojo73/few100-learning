
export class Album {
    title: string;
    private _artist: string;

    get artist() {
        return this._artist
    }
    set artist(name: string) {
        this._artist = name;
    }
    public getInfo() {
        return `${this.title} by ${this.artist}`
    }
}