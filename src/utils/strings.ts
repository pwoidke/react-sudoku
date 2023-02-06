// @ts-ignore
// eslint-disable-next-line
interface String {
    replaceAt(index: number, replacement: string): string;
    chunk(size: number): string[];
}

// eslint-disable-next-line
String.prototype.replaceAt = function (index: number, replacement: string): string {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

// eslint-disable-next-line
String.prototype.chunk = function (size): string[] {
    return [].concat.apply([],
        // @ts-ignore
        this.split('').map(function (x,i) { return i%size ? [] : this.slice(i,i+size) }, this)
    )
}
