#Make the device read rotational input and create an output of sound, light, or color 
while True:
    print ("Rotation of degrees in x-axis: " + input.rotation(Rotation.PITCH))
    print (" Rotation of degrees in y-axis: " + input.rotation(Rotation.ROLL))
    if input.rotation(Rotation.PITCH) > 0:
        light.set_all(light.rgb(255,0,255))
    else:
        light.clear()
