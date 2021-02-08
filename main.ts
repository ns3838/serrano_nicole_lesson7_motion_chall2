// Make the device read rotational input and create an output of sound, light, or color 
while (true) {
    console.log("Rotation of degrees in x-axis: " + input.rotation(Rotation.Pitch))
    console.log(" Rotation of degrees in y-axis: " + input.rotation(Rotation.Roll))
    if (input.rotation(Rotation.Pitch) > 0) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
}
