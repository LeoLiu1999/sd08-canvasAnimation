# sd06-svg

## Known bugs:

### Breaks if "I'm an Animaniac!" button is pressed before plotting first circle

Need to not start animation if first circle is not plotted

###"Stop" button does not stop

#### Further headaches:

As seen in the console, stopAnimation is getting called every single frame

###"Clear" will not clear

#### Note:

Possibly the same problem as the issue with "Stop" button

## Future improvements:

### Circle size is dependent on frameID, so toggling between the two animations may make the size jump. Make it incremental based on current size instead.