myPanel = new jsgl.Panel(document.getElementById("panel"));

/* Start drawing! */

/* Create circle and modify it */
circle = myPanel.createCircle();
circle.setCenterLocationXY(50,50);
circle.setRadius(30);
circle.getStroke().setWeight(5);
circle.getStroke().setColor("rgb(255,0,0)");
myPanel.addElement(circle);

/* Create polygon and modify it */
polygon = myPanel.createPolygon();
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
label = myPanel.createLabel();
label.setText("Hello World!");
label.setLocationXY(30,120);
label.setFontColor('pink');
label.setBold(true);
label.setFontFamily("sans-serif");
label.setFontSize(24);
myPanel.addElement(label);

// /* Create text label and modify it */
labelSpan = myPanel.createLabel();
labelSpan.setText("123");
labelSpan.setFontSize(24);
labelSpan.setLocationXY(30,220);
myPanel.addElement(labelSpan);

/* Create text tspan element, modify it and adding in LabelElement*/
onePart = myPanel.createTspan();
onePart.setText("Hi");
onePart.setFontColor('blue');
onePart.setBold(true);
onePart.setFontFamily("sans-serif");
onePart.setFontSize(24);
onePart.setOverlined(true);
onePart.setVerticalAnchor(jsgl.VerticalAnchor.MIDDLE);

/* Create text tspan element, modify it and adding in LabelElement*/
twoPart = myPanel.createTspan();
twoPart.setText(" evryone!");
twoPart.setFontColor('yellow');
twoPart.setBold(true);
twoPart.setFontFamily("Verdana");
twoPart.setVerticalAnchor(jsgl.VerticalAnchor.TOP);
twoPart.setUnderlined(true);
twoPart.setFontSize(20);

/* Create text tspan element, modify it and adding in LabelElement*/
threePart = myPanel.createTspan();
threePart.setText("  and such ledy!");
threePart.setFontColor('red');
threePart.setBold(false);
threePart.setFontFamily("Verdana");
threePart.setStruckThrough(true);
threePart.setFontSize(20);
threePart.setVerticalAnchor(jsgl.VerticalAnchor.TOP);

labelSpan.appendChild(onePart);
labelSpan.appendChild(twoPart);
labelSpan.appendChild(threePart);
