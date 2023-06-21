// Interface
interface Rect {
    readonly id: string // read only
    color?: string // optional field
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    color: '#ccc',
    size: {
        width: 20,
        height: 30
    }
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
}
rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}


// Interface Inheritance
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}


// Interface With Classes
interface IClock { //I indicate what the interface is
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}


// Object With Dynamic Keys
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}