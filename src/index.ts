console.log('Init');
// @ts-ignore
import jsgl from 'nextjsgl';


/* Instantiate JSGL Panel. */
const myPanel = new jsgl.Panel(document.getElementById("panel"));

/* Start drawing! */

/* Create circle and modify it */
const circle = myPanel.createCircle();
circle.setCenterLocationXY(50,50);
circle.setRadius(30);
circle.getStroke().setWeight(5);
circle.getStroke().setColor("rgb(255,0,0)");
myPanel.addElement(circle);

/* Create polygon and modify it */
const polygon = myPanel.createPolygon();
polygon.addPointXY(50,50);
polygon.addPointXY(110,50);
polygon.addPointXY(150,80);
polygon.addPointXY(110,110);
polygon.addPointXY(50,110);
polygon.getStroke().setWeight(5);
polygon.getStroke().setColor("rgb(0,0,255)");
polygon.getFill().setColor("rgb(0,255,0)");
polygon.getFill().setOpacity(0.5);
myPanel.addElement(polygon);

/* Create text label and modify it */
const label = myPanel.createLabel();
label.setText("Hello World!");
label.setLocationXY(30,120);
label.setBold(true);
label.setFontFamily("sans-serif");
label.setFontSize(24);
myPanel.addElement(label);

interface Vector2D {
    x: number;
    y: number;
}

    function calculateLength(v: Vector2D) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }

    interface NamedVector {
        name: string;
        x: number;
        y: number;
    }

const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
console.log(calculateLength(v)); // ok, результат равен 5.

