export class tags {
    static readonly ANGULAR = new tags("Angular", "red")
    static readonly TYPESCRIPT = new tags("Typescript", "Orange")
    static readonly PYTHON = new tags("Python", "green")
    static readonly HTML = new tags("HTML", "gray")
    static readonly CSS = new tags("CSS", "pink")
    static readonly JAVASCRIPT = new tags("Javascript", "brown")
    static readonly BOOTSTRAP = new tags("Bootstrap", "skyblue")
    static readonly JAAV = new tags("Java", "lightsalmon")
    static readonly SPRING = new tags("Springboot", "black")



    constructor(private readonly key: string, public readonly color: string) {

    }
    toString() {
        return this.key
    }
}