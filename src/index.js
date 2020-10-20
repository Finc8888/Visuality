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
labelSpan.setText("");
labelSpan.setLocationXY(30,220);
labelSpan.setBold(true);
labelSpan.setFontFamily("sans-serif");
labelSpan.setFontSize(24);
myPanel.addElement(labelSpan);

/* Create text label and modify it */
onePart = myPanel.createTspan();
onePart.setText("Hi");
onePart.setLocationXY(30,250);
onePart.setFontColor('blue');
onePart.setBold(true);
onePart.setFontFamily("sans-serif");
onePart.setFontSize(24);
myPanel.addElement(onePart);
console.log('onePart', onePart);
console.log('label', label);

/* Create text label and modify it */
twoPart = myPanel.createTspan();
twoPart.setText(" evryone!");
twoPart.setLocationXY(30,280);
twoPart.setFontColor('green');
twoPart.setBold(true);
twoPart.setFontFamily("sans-serif");
twoPart.setFontSize(24);
myPanel.addElement(twoPart);

labelSpan.appendChild(onePart);
labelSpan.appendChild(twoPart);
